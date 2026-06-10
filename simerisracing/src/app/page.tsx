import styles from "./page.module.scss";
import CarbonBg from '@/components/CarbonBg/CarbonBg';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';

const s = styles;

function Home() {
    return (
        <ScrollSmootherWrapper>
            <CarbonBg />
            <h1 className={s.h1}>Page under construction...</h1>
            <Footer />
        </ScrollSmootherWrapper>
    );
}

export default Home;