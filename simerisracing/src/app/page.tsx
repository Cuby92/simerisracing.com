import styles from "./page.module.scss";
import CarbonBg from '@/components/CarbonBg/CarbonBg';

const s = styles;

function Home() {
    return (
        <>
            <CarbonBg />
            <h1 className={s.h1}>Page under construction...</h1>
        </>
    );
}

export default Home;