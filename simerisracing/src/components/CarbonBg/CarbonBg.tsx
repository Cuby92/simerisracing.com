import styles from './CarbonBg.module.scss';

const s = styles;

function CarbonBg() {
    return (
        <div 
            className={s.bg}
            data-speed={0.3}
        ></div>
    );
}

export default CarbonBg;