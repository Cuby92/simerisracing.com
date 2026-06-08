import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

const s = styles;

function Contact() {
    return (
        <>
        <section className={`${s.HeroSection} id="contact_hero" page`}>
                <h1 className={s.h1}>Got a question? Need support? Want to talk?</h1>
                <p className={s.p}>We're here. No ticket maze. No corporate nonsense. Just direct contact with people who actually know the hardware.</p>
                <ScrollDownButton nextSection={'#contact_intro'}/>
            </section>

            <section className={`${s.IntroSection} page`} id="contact_intro">
                <p className={s.p}>SIMERIS RACING is a small team, so you're not getting bounced between departments or bots that waste your time.</p>
                <p className={s.p}>If it's about gear, setup help, orders, or compatibility, reach out directly. We'll get back to you ASAP - usually within 12 hours.</p>
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
                                <li className={s.li}>Direct support</li>
                                <li className={s.li}>Setup help</li>
                                <li className={s.li}>Community discussions</li>
                                <li className={s.li}>Early updates and feedback</li>
                            </ul>
                            <strong><a href="https://discord.gg/YmfTp5R3Jd" target="_blank">Join Discord</a></strong>
                        </div>
                    </div>

                    <div className={`${s.IG} ${s.cell}`}>
                        <div className={s.bgIcon}></div>

                        <div className={s.content}>
                            <h3 className={s.h3}>Instagram</h3>
                            <p>Whether you want product updates, development progress, or support, we're active on Instagram.</p>

                            <div className={s.OfficialIG}>
                                <h4>Official: <a href="https://instagram.com/simeris.racing" target="_blank">@simeris.racing</a></h4>
                                <p>Our official company account for products announcements, updates, and news</p>
                            </div>

                            <div className={s.PrivIG}>
                                <h4>Founder: <a href="https://instagram.com/cuby927" target="_blank">@cuby927</a></h4>
                                <p>Follow for behind the scenes content. Feel free to contact me if you have any questions or just want to talk.</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${s.Email} ${s.cell}`}>
                        <div className={s.bgIcon}></div>

                        <div className={s.content}>
                            <h3 className={s.h3}>Email</h3>
                            <a href="mailto:shop@simerisracing.com">shop@simerisracing.com</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;