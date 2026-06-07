'use client';

import { motion } from 'motion/react';

function ScrollDownButton({ nextSection } : { nextSection: string }) {
    return (
        <motion.a href={nextSection}></motion.a>
    );
}

export default ScrollDownButton;