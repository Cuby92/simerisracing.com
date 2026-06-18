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
                <ScrollDownButton nextSection={'#our-philosophy'} />
            </section>

            <section className={`${s.PhilosophySection} page`} id="our-philosophy">
                <ScrollDownButton nextSection={'#our-commitment'} />
                <h2 className={s.h2}>Our Philosophy</h2>
                <p>The most important factor for us is the customer satisfaction - we don't just want to sell a product and disappear. We want people to be fully satisfied with their purchase. In the design process we focus on durability, realism, and performance. We also don't make loud marketing like big brands - we focus on building a loyal, supportive community.</p>
            </section>
        </div>
    );
}

export default About;