import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import StdLink from '@/components/links/std/StdLink';

const s = styles;

function Contact() {
    return (
        <>
            <section className={`${s.HeroSection} page`} id="contact_hero">
                <h1 className={s.h1}>Got a question? Need support? Want to talk?</h1>
                <p className={s.p}>We're here. No ticket maze. No corporate nonsense. Just direct contact with people who actually know the hardware.</p>
                <ScrollDownButton nextSection={'#contact_intro'}/>
            </section>

            <section className={`${s.IntroSection} page`} id="contact_intro">
                <p className={s.p}>SIMERIS RACING is a small team, so <strong className={s.strong}>you're not getting bounced between departments or bots</strong> that waste your time.</p>
                <p className={s.p}>If it's about gear, setup help, orders, or compatibility, <strong className={s.strong}>reach out directly</strong>. We'll get back to you <strong className={s.strong}>ASAP</strong> - usually within <strong className={s.strong}>12 hours</strong>.</p>
                <ScrollDownButton nextSection={'#contact_options'} />
            </section>

            <section className={`${s.ContactOptionsSection} page`} id="contact_options">
                <div className={s.ContactOptions}>

                    <div className={`${s.DC} ${s.cell}`}>
                        <div className={s.bgIcon}></div>
                        <div className={s.content}>
                            <h3 className={s.h3}>Discord</h3>
                            <h4 className={s.h4}>Join our Discord Server for:</h4>
                            <ul className={s.ul}>
                                <li className={s.li}><strong className={s.strong}>Direct support</strong></li>
                                <li className={s.li}><strong className={s.strong}>Setup help</strong></li>
                                <li className={s.li}><strong className={s.strong}>Community discussions</strong></li>
                                <li className={s.li}><strong className={s.strong}>Early updates and feedback</strong></li>
                            </ul>
                            <strong><StdLink href="https://discord.gg/YmfTp5R3Jd" target="_blank">Join Discord</StdLink></strong>
                        </div>
                    </div>

                    <div className={`${s.IG} ${s.cell}`}>
                        <div className={s.bgIcon}></div>

                        <div className={s.content}>
                            <h3 className={s.h3}>Instagram</h3>
                            <p>Whether you want product updates, development progress, or support, we're active on Instagram.</p>

                            <div className={s.OfficialIG}>
                                <h4 className={s.h4}>Official: <StdLink href="https://instagram.com/simeris.racing" target="_blank">@simeris.racing</StdLink></h4>
                                <p>Our official company account for products <strong className={s.strong}>announcements, updates, and news</strong>.</p>
                            </div>

                            <div className={s.PrivIG}>
                                <h4 className={s.h4}>Founder: <StdLink href="https://instagram.com/cuby927" target="_blank">@cuby927</StdLink></h4>
                                <p>Follow for <strong className={s.strong}>behind the scenes</strong> content. Feel free to contact me if you have any <strong className={s.strong}>questions</strong> or <strong className={s.strong}>just want to talk</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${s.Email} ${s.cell}`}>
                        <div className={s.bgIcon}></div>

                        <div className={s.content}>
                            <h3 className={s.h3}>Email</h3>
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