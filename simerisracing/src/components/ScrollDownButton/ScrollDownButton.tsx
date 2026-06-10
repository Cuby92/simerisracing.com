'use client';

import styles from './ScrollDownButton.module.scss';
import { motion } from 'motion/react';

const s = styles;

function ScrollDownButton({ nextSection } : { nextSection: string }) {
    const handleClick = () => {
        const targetId = nextSection.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.button 
            onClick={handleClick}
            className={`${s.ScrollDownButton} ScrollDownButton`}
            style={{ 
                border: 'none', 
                cursor: 'pointer', 
                padding: 0,
                display: 'block'
            }}
        ></motion.button>
    );
}

export default ScrollDownButton;