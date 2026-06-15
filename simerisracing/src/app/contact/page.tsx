'use client';

import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import StdLink from '@/components/links/std/StdLink';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const s = styles;

type Heading      = HTMLHeadingElement   | null;
type HeadingRef   = React.RefObject<Heading>;

type Paragraph    = HTMLParagraphElement | null;
type ParagraphRef = React.RefObject<Paragraph>;

type Button       = HTMLButtonElement    | null;
type ButtonRef    = React.RefObject<Button>;

type Element      = HTMLElement          | null;
type ElementRef   = React.RefObject<Element>;

type Div          = HTMLDivElement       | null;
type DivRef       = React.RefObject<Div>;

type Li           = HTMLLIElement        | null;
type LiRef        = React.RefObject<Li>;

function Contact() {
    const heroSection: {
        h1:   HeadingRef;
        ps:   ParagraphRef;
        page: ElementRef;
    } = {
        h1:   useRef<Heading>(null),
        ps:   useRef<Paragraph>(null),
        page: useRef<Element>(null)
    };

    const introSection: {
        ps:     Array<ParagraphRef>;
        page:   ElementRef;
        strong: Array<ElementRef>;
    } = {
        ps:     Array.from({ length: 2 }, () => useRef<Paragraph>(null)),
        page:   useRef<Element>(null),
        strong: Array.from({ length: 5 }, () => useRef<Element>(null))
    }

    const contactOptionsSection: {
        page:    ElementRef;
        bgIcons: Array<DivRef>;
        h3s:     Array<HeadingRef>;
        ps:      Array<ParagraphRef>;
        lis:     Array<LiRef>;
    } = {
        page:    useRef<Element>(null),
        bgIcons: Array.from({ length: 3 }, () => useRef<Div>(null)),
        h3s:     Array.from({ length: 3 }, () => useRef<Heading>(null)),
        ps:      Array.from({ length: 3 }, () => useRef<Paragraph>(null)),
        lis:     Array.from({ length: 3 }, () => useRef<Li>(null))
    };

    const ScrollDownButtons = [useRef<Button>(null), useRef<Button>(null)];

    useGSAP(() => {
        if (!heroSection.page.current) return;
        gsap.from([heroSection.h1.current, heroSection.ps.current], {
            duration: 0.7,
            opacity: 0,
            y: 30,
            scale: 0.7,
            stagger: 0.3,
            ease: 'power1.out'
        });
    });

    useGSAP(() => {
        if (!heroSection.page.current) return;
        gsap.to([heroSection.h1.current, heroSection.ps.current], {
            x: index => index % 2 == 0 ? -40 : 40,
            filter: 'blur(5px)',
            color: 'transparent',
            scrollTrigger: {
                trigger: heroSection.page.current,
                start: 'top top',
                end: '90% top',
                scrub: true,
                pin: true
            },
            toggleActions: 'play reverse restart reverse',
        });
    });

    useGSAP(() => {
        if (!introSection.page.current) return;
        gsap.timeline({ scrollTrigger: {
            trigger: introSection.page.current,
            start: 'top center',
            toggleActions: 'play reverse restart reverse'
        }})
        .from([introSection.ps[0].current, introSection.ps[1].current], {
            duration: 0.7,
            opacity: 0,
            scale: 0.75,
            stagger: 0.3,   
        })
        .from(introSection.strong.map(strong => strong.current), {
            duration: 1.5,
            color: '#fff',
            ease: 'elastic.out'
        });
    });

    useGSAP(() => {
        if (!contactOptionsSection.page.current) return;
        gsap.timeline({ scrollTrigger: {
            trigger: contactOptionsSection.page.current,
            start: 'top center',
            toggleActions: 'play reverse restart reverse'
        }})
        .from(contactOptionsSection.bgIcons.map(icon => icon.current), {
            duration: 0.7,
            opacity: 0.1,
            stagger: 0.3,
            ease: 'elastic.out',
            delay: 0.2
        })
        .from(contactOptionsSection.h3s.map(h3 => h3.current), {
            duration: 0.5,
            opacity: 0,
            y: -20,
            stagger: 0.1
        }, 0.5)
        .from(contactOptionsSection.ps.map(p => p.current), {
            x: -10,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1
        })
        .from(contactOptionsSection.lis.map(li => li.current), {
            x: 10,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1
        }, '-=50%');
    });

    return (
        <>
            <section className={`${s.HeroSection} page`} id="contact_hero" ref={heroSection.page}>
                <h1 className={s.h1} ref={heroSection.h1}>Got a question? Need support? Want to talk?</h1>
                <p className={s.p} ref={introSection.ps[0]}>We're here. No ticket maze. No corporate nonsense. Just direct contact with people who actually know the hardware.</p>
                <ScrollDownButton nextSection={'#contact_intro'} />
            </section>

            <section className={`${s.IntroSection} page`} id="contact_intro" ref={introSection.page}>
                <p className={s.p} ref={introSection.ps[1]}>SIMERIS RACING is a small team, so <strong className={s.strong} ref={introSection.strong[0]}>you're not getting bounced between departments or bots</strong> that waste your time.</p>
                <p className={s.p} ref={introSection.ps[2]}>If it's about gear, setup help, orders, or compatibility, <strong className={s.strong} ref={introSection.strong[1]}>reach out directly</strong>. We'll get back to you <strong className={s.strong} ref={introSection.strong[2]}>ASAP</strong> - usually within <strong className={s.strong} ref={introSection.strong[3]}>12 hours</strong>.</p>
                <ScrollDownButton nextSection={'#contact_options'} />
            </section>

            <section className={`${s.ContactOptionsSection} page`} id="contact_options" ref={contactOptionsSection.page}>
                <div className={s.ContactOptions}>

                    <div className={`${s.DC} ${s.cell}`}>
                        <div className={s.bgIcon} ref={contactOptionsSection.bgIcons[0]}></div>
                        <div className={s.content}>
                            <h3 className={s.h3} ref={contactOptionsSection.h3s[0]}>Discord</h3>
                            <h4 className={s.h4}>Join our Discord Server for:</h4>
                            <ul className={s.ul}>
                                <li className={s.li} ref={contactOptionsSection.lis[0]}><strong className={s.strong}>Direct support</strong></li>
                                <li className={s.li} ref={contactOptionsSection.lis[1]}><strong className={s.strong}>Setup help</strong></li>
                                <li className={s.li} ref={contactOptionsSection.lis[2]}><strong className={s.strong}>Community discussions</strong></li>
                                <li className={s.li} ref={contactOptionsSection.lis[3]}><strong className={s.strong}>Early updates and feedback</strong></li>
                            </ul>
                            <strong><StdLink href="https://discord.gg/YmfTp5R3Jd" target="_blank">Join Discord</StdLink></strong>
                        </div>
                    </div>

                    <div className={`${s.IG} ${s.cell}`}>
                        <div className={s.bgIcon} ref={contactOptionsSection.bgIcons[1]}></div>

                        <div className={s.content}>
                            <h3 className={s.h3} ref={contactOptionsSection.h3s[1]}>Instagram</h3>
                            <p ref={contactOptionsSection.ps[2]}>Whether you want product updates, development progress, or support, we're active on Instagram.</p>

                            <div className={s.OfficialIG}>
                                <h4 className={s.h4}>Official: <StdLink href="https://instagram.com/simeris.racing" target="_blank">@simeris.racing</StdLink></h4>
                                <p ref={contactOptionsSection.ps[3]}>Our official company account for products <strong className={s.strong}>announcements, updates, and news</strong>.</p>
                            </div>

                            <div className={s.PrivIG}>
                                <h4 className={s.h4}>Founder: <StdLink href="https://instagram.com/cuby927" target="_blank">@cuby927</StdLink></h4>
                                <p ref={contactOptionsSection.ps[4]}>Follow for <strong className={s.strong}>behind the scenes</strong> content. Feel free to contact me if you have any <strong className={s.strong}>questions</strong> or <strong className={s.strong}>just want to talk</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${s.Email} ${s.cell}`}>
                        <div className={s.bgIcon} ref={contactOptionsSection.bgIcons[2]}></div>

                        <div className={s.content}>
                            <h3 className={s.h3} ref={contactOptionsSection.h3s[2]}>Email</h3>
                            <div className={s.content}>
                                <StdLink href="mailto:shop@simerisracing.com">shop@simerisracing.com</StdLink>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;