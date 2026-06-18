import styles from './page.module.scss';
import ScrollDownButton from '@/components/ScrollDownButton/ScrollDownButton';

const s = styles;

function About() {
    return (
        <div className={s.Page}>
            <section className={`${s.HeroSection} page`}>
                <h1 className={s.bgText}><span className={s.slashes}>//</span>About Us</h1>
                <h1 className={s.h1}>About us</h1>
                <p className={s.p}>We are a small team with a simple goal: build sim racing gear that actually makes sense. <strong className={s.bold}>Durable hardware, thoughtful engineering, and long-term support</strong> - shaped by people who race everyday.</p>
                <ScrollDownButton nextSection={'#intro'} />
            </section>

            <section className={`${s.IntroSection} page`} id="intro">
                <ScrollDownButton nextSection={''} />
            </section>
        </div>
    );
}

export default About;