'use client';

import styles from './Header.module.scss';
import { motion } from 'motion/react';

const s = styles;

function Header() {
    return (
        <header className={s.Header}>
            <motion.a 
                className={s.logo} href="/" 
                whileHover={{ 
                    scale: 1.01, 
                    '--beforeOpacity': 1, 
                    transition: { duration: 0.4, ease: 'easeOut' }
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}></motion.a>
        </header>
    );
}

export default Header;