'use client';

import styles from './ScrollDownButton.module.scss';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const s = styles;

function ScrollDownButton({ nextSection } : { nextSection: string }) {
    const handleClick = () => {
        const targetId = nextSection.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            gsap.to(window, {
                scrollTo: targetElement,
                duration: 1,
                ease: "power2.inOut"
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