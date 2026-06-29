'use client';

import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Page, Heading, P, AnyElement, A } from '@/utils/ref-types';
import { mapArray, filterElement } from '@/utils/functions';
import { CustomEase } from 'gsap/CustomEase';
import { CustomBounce } from 'gsap/CustomBounce';

gsap.registerPlugin(CustomEase, CustomBounce, ScrollTrigger);

const s = styles;

function About() {
    const cover: Page = {
        page:             useRef<AnyElement>(null),
        h1:               useRef<Heading>(null),
        p:                useRef<P>(null),
        strongs:          [useRef<AnyElement>(null)],
    };

    const philosophyPage: Page = {
        page:             useRef<AnyElement>(null),
        h2:               useRef<Heading>(null),
        p:                useRef<P>(null),
        strongs:          Array.from({ length: 5 }, () => useRef<AnyElement>(null)),
    }

    const commitmentPage: Page = {
        page:             useRef<AnyElement>(null),
        h2:               useRef<Heading>(null),
        ps:               Array.from({ length: 2}, () => useRef<P>(null)),
        strongs:          Array.from({ length: 5 }, () => useRef<AnyElement>(null)),
    }

    const teamSection: {
        cover: Page;
        cuby: Page;
        p4ncake: Page;
        adam: Page;
    } = {
        cover: {
            page:    useRef<AnyElement>(null),
            h2:      useRef<Heading>(null),
            p:       useRef<P>(null)
        },
        cuby: {
            page:    useRef<AnyElement>(null),
            h3:      useRef<Heading>(null),
            h4:      useRef<Heading>(null),
            ps:      Array.from({ length: 3 }, () => useRef<P>(null)),
            links:   Array.from({ length: 4 }, () => useRef<A>(null)),
            strongs: Array.from({ length: 2 }, () => useRef<AnyElement>(null))
        },
        p4ncake: {
            page:    useRef<AnyElement>(null),
            h3:      useRef<Heading>(null),
            h4:      useRef<Heading>(null),
            ps:      Array.from({ length: 2 }, () => useRef<P>(null)),
            links:   [useRef<A>(null)],
            strongs: Array.from({ length: 1 }, () => useRef<AnyElement>(null))
        },
        adam: {
            page:    useRef<AnyElement>(null),
            h3:      useRef<Heading>(null),
            h4:      useRef<Heading>(null),
            p:       useRef<P>(null)
        }
    }

    // -   A  N  I  M  A  T  I  O  N  S   - //

    // COVER
    // H1 and paragraph
    useGSAP(() => {
        gsap.from([cover.h1?.current, cover.p?.current], {
            duration: 1,
            opacity: 0,
            x: index => index % 2 ? 100 : -100,
            stagger: 0.3
        });
    });

    // Bold blink
    useGSAP(() => {
        gsap.from(mapArray(cover.strongs), {
            duration: 0.5,
            color: '#fff',
            delay: 1,
            ease: CustomBounce.create("myBounce", {
                strength: 0.5,
                endAtStart: false,
                squash: 1,
                squashID: "myBounce-squash"
            })
        });
    });

    // PHILOSOPHY PAGE ANIMATIONS
    useGSAP(() => {
        if (!philosophyPage.page.current) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: philosophyPage.page.current,
                start: '90% bottom'
            }
        })
        .from(filterElement(philosophyPage.h2), {
            opacity: 0,
            duration: 1
        })
        .from(filterElement(philosophyPage.p), {
            opacity: 0,
            x: -30,
            duration: 1
        }, "<0.5")
        .from(mapArray(philosophyPage.strongs), {
            color: '#fff',
            duration: 0.5,
            ease: CustomBounce.create("myBounce", {
                strength: 0.5,
                endAtStart: false,
                squash: 1,
                squashID: "myBounce-squash"
            })
        }, "<0.7");
    });

    // COMMITMENT PAGE ANIMATIONS
    useGSAP(() => {
        if (!commitmentPage.page.current) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: commitmentPage.page.current,
                start: '90% bottom'
            }
        })
        .from(filterElement(commitmentPage.h2), {
            opacity: 0,
            duration: 1
        })
        .from(mapArray(commitmentPage.ps), {
            opacity: 0,
            x: -30,
            duration: 1,
            stagger: 0.3
        }, "<0.5")
        .from(mapArray(commitmentPage.strongs), {
            color: '#fff',
            duration: 0.5,
            ease: CustomBounce.create("myBounce", {
                strength: 0.5,
                endAtStart: false,
                squash: 1,
                squashID: "myBounce-squash"
            })
        }, "<0.7");
    });

    // TEAM SECTION COVER ANIMATIONS
    // H2
    useGSAP(() => {
        gsap.from(filterElement(teamSection.cover.h2), {
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: teamSection.cover.page.current,
                start: "90% bottom",
                end: 'top top',
                scrub: true
            }
        });
    });

    // Paragraph
    useGSAP(() => {
        gsap.from(filterElement(teamSection.cover.p), {
            opacity: 0,
            y: 20,
            scrollTrigger: {
                trigger: teamSection.cover.page.current,
                start: "90% bottom",
                end: 'top top',
                scrub: true
            },
            duration: 1
        });
    });

    // CUBY PAGE ANIMATIONS
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: teamSection.cuby.page.current,
                start: "90% bottom"
            }
        })
        .from([filterElement(teamSection.cuby.h3), filterElement(teamSection.cuby.h4), ...mapArray(teamSection.cuby.ps)], {
            opacity: 0,
            x: index => index <= 1 ? -100 : 50,
            duration: 1,
            stagger: 0.3,
            toggleActions: 'play reverse restart reverse'
        })
        .from(mapArray(teamSection.cuby.links), {
            duration: 0.7,
            opacity: 0,
            x: window.innerWidth >= 769 ? -50 : 0,
            y: window.innerWidth <  769 ? 50  : 0,
            stagger: 0.3
        }, "<0.7");
    });

    // P4NCAKE PAGE ANIMATIONS
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: teamSection.p4ncake.page.current,
                start: "90% bottom"
            }
        })
        .from([filterElement(teamSection.p4ncake.h3), filterElement(teamSection.p4ncake.h4), ...mapArray(teamSection.p4ncake.ps)], {
            opacity: 0,
            x: index => index <= 1 ? -100 : 50,
            duration: 1,
            stagger: 0.3
        })
        .from(mapArray(teamSection.p4ncake.links), {
            duration: 0.7,
            opacity: 0,
            x: window.innerWidth >= 769 ? -50 : 0,
            y: window.innerWidth <  769 ? 50  : 0,
            stagger: 0.3
        }, "<0.7");
    });

    // ADAM SECTION ANIMATIONS
    useGSAP(() => {
        gsap.from([filterElement(teamSection.adam.h3), filterElement(teamSection.adam.h4), filterElement(teamSection.adam.p)], {
            opacity: 0,
            x: index => index <= 1 ? -100 : 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: teamSection.adam.page.current,
                start: "90% bottom"
            }
        });
    });

    return (
        <div className={s.Page}>
            <section className={`${s.HeroSection} page`} ref={cover.page}>
                <h1 className={s.bgText}><span className={s.slashes}>//</span>About Us</h1>
                <h1 className={s.h1} ref={cover.h1}>About us</h1>
                <p className={s.p} ref={cover.p}>We are a small team with a simple goal: build sim racing gear that actually makes sense. <strong className={s.bold} ref={cover.strongs?.[0]}>Durable hardware, thoughtful engineering, and long-term support</strong> - shaped by people who race everyday.</p>
                <ScrollDownButton nextSection={'#our-philosophy'} />
            </section>

            <section className={`${s.PhilosophySection} page`} id="our-philosophy" ref={philosophyPage.page}>
                <h2 className={s.h2} ref={philosophyPage.h2}>Our<strong>Philosophy</strong></h2>
                <div className={s.ps}>
                    <p className={s.p} ref={philosophyPage.p}>
                        The most important factor for us is the customer <strong ref={philosophyPage.strongs?.[0]}>satisfaction</strong> - we don't just want to sell a product and disappear. We want people to be fully satisfied with their purchase. In the design process we focus on <strong ref={philosophyPage.strongs?.[1]}>durability</strong>, <strong ref={philosophyPage.strongs?.[2]}>realism</strong>, and <strong ref={philosophyPage.strongs?.[3]}>performance</strong>. We also don't make loud marketing like big brands - we focus on building a loyal, supportive <strong ref={philosophyPage.strongs?.[4]}>community</strong>
                    </p>
                </div>
                <ScrollDownButton nextSection={'#our-commitment'} />
            </section>

            <section className={`${s.CommitmentSection} page`} id="our-commitment" ref={commitmentPage.page}>
                <h2 className={s.h2} ref={commitmentPage.h2}>Our<strong>Commitment</strong></h2>
                <div className={s.ps}>
                    <p className={s.p} ref={commitmentPage.ps?.[0]}>
                        We are here for the long run. SIMERIS is building steadily and intentionally, with a roadmap prioritizing <strong ref={commitmentPage.strongs?.[0]}>durability</strong> and meaningful <strong ref={commitmentPage.strongs?.[2]}>innovation</strong>. We still have a lot of work ahead of us, but every product release is one we stand behind.
                    </p>
                    <p className={s.p} ref={commitmentPage.ps?.[1]}>
                        We take responsibility for our gear - every product has <strong ref={commitmentPage.strongs?.[3]}>2 years of warranty</strong> and <strong ref={commitmentPage.strongs?.[4]}>lifetime support</strong>.
                    </p>
                </div>
                <ScrollDownButton nextSection={"#team"} />
            </section>

            <section className={s.Team}>
                <section className={`${s.cover} page`} id="team" ref={teamSection.cover.page}>
                    <div className={s.content}>
                        <h2 className={s.h2} ref={teamSection.cover.h2}>The <strong>People</strong> Behind SIMERIS</h2>
                        <p className={s.p} ref={teamSection.cover.p}>Every product starts with people who care about getting the details right. Meet the team building, testing and improving SIMERIS RACING.</p>
                    </div>
                    <ScrollDownButton nextSection={"#cuby"} />
                </section>

                <section className={`${s.CubySection} page`} id="cuby" ref={teamSection.cuby.page}>
                    <div className={s.headings}>
                        <h3 className={s.h3} ref={teamSection.cuby.h3}>Jakub <i>Cuby</i> Barczyński</h3>
                        <h4 className={s.h4} ref={teamSection.cuby.h4}>Founder <span className={s.slash} ref={teamSection.cuby.strongs?.[0]}>/</span> Web Developer <span className={s.slash} ref={teamSection.cuby.strongs?.[1]}>/</span> Hardware Developer</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p} ref={teamSection.cuby.ps?.[0]}>
                            I was always passionate about motorsports. I had started sim racing few years ago and I quickly found a lot of problems even premium brands don't solve. I had been looking for a shifter and found out there was no realistic one in an accessible price range. I decided to fill that gap.
                        </p>
                        <p className={s.p} ref={teamSection.cuby.ps?.[1]}>
                            I spend months designing and testing our gear. If something has a chance to break or doesn't feel right it doesn't leave the workshop.
                        </p>
                        <p className={s.p} ref={teamSection.cuby.ps?.[2]}>
                            You can contact me at any time if you have any questions or just want to talk.
                        </p>
                    </div>
                    <div className={s.links}>
                        <a className={`${s.link} ${s.ig}`} href="https://instagram.com/cuby927" target="_blank" ref={teamSection.cuby.links?.[0]}></a>
                        <a className={`${s.link} ${s.dc}`} href="https://discord.gg/CB7Bjvtn" target="_blank" ref={teamSection.cuby.links?.[1]}></a>
                        <a className={`${s.link} ${s.linkedin}`} href="https://pl.linkedin.com/in/jakub-barczy%C5%84ski-512-16b3aa" target="_blank" ref={teamSection.cuby.links?.[2]}></a>
                        <a className={`${s.link} ${s.github}`} href="https://github.com/Cuby92" target="_blank" ref={teamSection.cuby.links?.[3]}></a>
                    </div>
                    <ScrollDownButton nextSection={"#p4ncake"} />
                </section>

                <section className={`${s.P4ncakeSection} page`} id="p4ncake" ref={teamSection.p4ncake.page}>
                    <div className={s.headings}>
                        <h3 className={s.h3} ref={teamSection.p4ncake.h3}>P4ncake</h3>
                        <h4 className={s.h4} ref={teamSection.p4ncake.h4}>Artist <span className={s.slash} ref={teamSection.p4ncake.strongs?.[0]}>/</span> Web Developer</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p} ref={teamSection.p4ncake.ps?.[0]}>
                            P4ncake is an experienced web developer and graphic designer with a broad portfolio. From simple websites, Minecraft resource packs, and emoji packs to fully featured web apps, she has worked on a wide range of creative and technical projects.
                        </p>
                        <p className={s.p} ref={teamSection.p4ncake.ps?.[1]}>
                            At SIMERIS RACING she helps develop the website and supports graphic design work across the brand.
                        </p>
                    </div>
                    <div className={s.links}>
                        <a className={`${s.link} ${s.github}`}href="https://github.com/P4ncake4451" target="_blank" ref={teamSection.p4ncake.links?.[0]}></a>
                    </div>
                    <ScrollDownButton nextSection={"#adam"} />
                </section>

                <section className={`${s.AdamSection} page`} id="adam" ref={teamSection.adam.page}>
                    <div className={s.headings}>
                        <h3 className={s.h3} ref={teamSection.adam.h3}>Adam Barczyński</h3>
                        <h4 className={s.h4} ref={teamSection.adam.h4}>Tester</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p} ref={teamSection.adam.p}>
                            Adam is also a sim racer. He tests our gear and contribites to the design by giving honest feedback and pointing out real problems our products could solve.
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default About;