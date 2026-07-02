import styles from "./page.module.scss";
import CarbonBg from '@/components/CarbonBg/CarbonBg';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import StdLink from '@/components/links/std/StdLink';

const s = styles;

function Home() {
    return (
        <ScrollSmootherWrapper>
            <CarbonBg />
            <div className={`page ${s.Cover}`}>
                <h1>Page under construction...</h1>
                <nav>
                    <h2>This page is not yet available. Try visiting another pages instead:</h2>
                    <ul>
                        <li><StdLink href="/about">About</StdLink></li>
                        <li><StdLink href="/contact">Contact</StdLink></li>
                        <li><StdLink href="/products/panther-hp">PANTHER HP</StdLink></li>
                    </ul>
                </nav>
            </div>
            <Footer />
        </ScrollSmootherWrapper>
    );
}

export default Home;