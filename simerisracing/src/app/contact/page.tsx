import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

const s = styles;

function Contact() {
    return (
        <>
        <section className={`${s.HeroSection} id="contact_hero" page`}>
                <h1 className={s.h1}>Got a question? Need support? Want to talk?</h1>
                <p>We're here. No ticket maze. No corporate nonsense. Just direct contact with people who actually know the hardware.</p>
                <ScrollDownButton nextSection={'#contact_intro'}></ScrollDownButton>
            </section>

            <section className={`${s.IntroSection} page`} id="contact_intro">
                <p className={s.p}>SIMERIS RACING is a small team, so you're not getting bounced between departments or bots that waste your time.</p>
                <p className={s.p}>If it's about gear, setup help, orders, or compatibility, reach out directly. We'll get back to you as fast as we can - usually within 12 hours.</p>
            </section>
        </>
    );
}

export default Contact;