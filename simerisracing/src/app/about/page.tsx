import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';

const s = styles;

function About() {
    return (
        <>
            <section className={`${s.HeroSection} id="contact_hero" page`}>
                <h1 className={s.h1}>Got a question? Need support? Want to talk?</h1>
                <p>We're here. No ticket maze. No corporate nonsense. Just direct contact with people who actually know the hardware.</p>
                <ScrollDownButton nextSection={'#contact_intro'}></ScrollDownButton>
            </section>

            <section className={`${s.IntroSection} page`} id="contact_intro">
                
            </section>
        </>
    )
}

export default About;