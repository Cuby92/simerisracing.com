'use client';

import styles from './ScrollDownButton.module.scss';
import { motion } from 'motion/react';

const s = styles;

function ScrollDownButton({ nextSection } : { nextSection: string }) {
    return (
        <motion.a 
            href={nextSection}
            className={`${s.ScrollDownButton} ScrollDownButton`}
        ></motion.a>
    );
}

export default ScrollDownButton;