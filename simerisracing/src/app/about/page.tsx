import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import StdLink from '@/components/links/std/StdLink';

const s = styles;

function About() {
    return (
        <div className={s.Page}>
            <section className={`${s.HeroSection} page`}>
                <h1 className={s.bgText}><span className={s.slashes}>//</span>About Us</h1>
                <h1 className={s.h1}>About us</h1>
                <p className={s.p}>We are a small team with a simple goal: build sim racing gear that actually makes sense. <strong className={s.bold}>Durable hardware, thoughtful engineering, and long-term support</strong> - shaped by people who race everyday.</p>
                <ScrollDownButton nextSection={'#our-philosophy'} />
            </section>

            <section className={`${s.PhilosophySection} page`} id="our-philosophy">
                <ScrollDownButton nextSection={'#our-commitment'} />
                <h2 className={s.h2}>Our<strong>Philosophy</strong></h2>
                <div className={s.ps}>
                    <p className={s.p}>
                        The most important factor for us is the customer <strong>satisfaction</strong> - we don't just want to sell a product and disappear. We want people to be fully satisfied with their purchase. In the design process we focus on <strong>durability</strong>, <strong>realism</strong>, and <strong>performance</strong>. We also don't make loud marketing like big brands - we focus on building a loyal, supportive <strong>community</strong>
                    </p>
                </div>
            </section>

            <section className={`${s.CommitmentSection} page`} id="our-commitment">
                <ScrollDownButton nextSection={"#team"} />
                <h2 className={s.h2}>Our<strong>Commitment</strong></h2>
                <div className={s.ps}>
                    <p className={s.p}>
                        We are here for the long run. SIMERIS is building steadily and intentionally, with a roadmap prioritizing <strong>durability</strong> and meaningful <strong>innovation</strong>. We still have a lot of work ahead of us, but every product release is one we stand behind.
                    </p>
                    <p className={s.p}>
                        We take responsibility for our gear - every product has <strong>2 years of warranty</strong> and <strong>lifetime support</strong>.
                    </p>
                </div>
            </section>

            <section className={s.Team}>
                <section className={`${s.cover} page`} id="team">
                    <ScrollDownButton nextSection={"#cuby"} />
                    <div className={s.content}>
                        <h2 className={s.h2}>The <strong>People</strong> Behind SIMERIS</h2>
                        <p className={s.p}>Every product starts with people who care about getting the details right. Meet the team building, testing and improving SIMERIS RACING.</p>
                    </div>
                </section>

                <section className={`${s.CubySection} page`} id="cuby">
                    <ScrollDownButton nextSection={"#p4ncake"} />
                    <div className={s.headings}>
                        <h3 className={s.h3}>Jakub <i>Cuby</i> Barczyński</h3>
                        <h4 className={s.h4}>Founder <span className={s.slash}>/</span> Web Developer <span className={s.slash}>/</span> Hardware Developer</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p}>
                            I was always passionate about motorsports. I had started sim racing few years ago and I quickly found a lot of problems even premium brands don't solve. I had been looking for a shifter and found out there was no realistic one in an accessible price range. I decided to fill that gap.
                        </p>
                        <p className={s.p}>
                            I spend months designing and testing our gear. If something has a chance to brake or doesn't feel right it doesn't leave the workshop.
                        </p>
                        <p className={s.p}>
                            You can contact me at any time if you have any questions or just want to talk.
                        </p>
                    </div>
                    <div className={s.links}>
                        <a className={`${s.link} ${s.ig}`} href="https://instagram.com/cuby927" target="_blank"></a>
                        <a className={`${s.link} ${s.dc}`} href="https://discord.gg/CB7Bjvtn" target="_blank"></a>
                        <a className={`${s.link} ${s.linkedin}`} href="https://pl.linkedin.com/in/jakub-barczy%C5%84ski-512-16b3aa" target="_blank"></a>
                        <a className={`${s.link} ${s.github}`} href="https://github.com/Cuby92" target="_blank"></a>
                    </div>
                </section>

                <section className={`${s.P4ncakeSection} page`} id="p4ncake">
                    <ScrollDownButton nextSection={"#adam"} />
                    <div className={s.headings}>
                        <h3 className={s.h3}>P4ncake</h3>
                        <h4 className={s.h4}>Artist <span className={s.slash}>/</span> Web Developer</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p}>
                            P4ncake is an experienced web developer and graphic designer with a broad portfolio. From simple websites, Minecraft resource packs, and emoji packs to fully featured web apps, she has worked on a wide range of creative and technical projects.
                        </p>
                        <p className={s.p}>
                            At SIMERIS RACING she helps develop the website and supports graphic design work across the brand.
                        </p>
                    </div>
                    <div className={s.links}>
                        <a className={`${s.link} ${s.github}`}href="https://github.com/P4ncake4451" target="_blank"></a>
                    </div>
                </section>

                <section className={`${s.AdamSection} page`} id="adam">
                    <div className={s.headings}>
                        <h3 className={s.h3}>Adam Barczyński</h3>
                        <h4 className={s.h4}>Tester</h4>
                    </div>
                    <div className={s.ps}>
                        <p className={s.p}>
                            Adam is also a sim racer. He tests our gear and contribites to the design by giving honest feedback and pointing out real problems our products could solve.
                        </p>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default About;