'use client';

import styles from './Header.module.scss';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const s = styles;

function Header() {
    const [hamburgerState, setHamburgerState] = useState(false);
    function toggleCheckbox() {
        setHamburgerState(prev => !prev);
    }
    
    const topBar = useRef<HTMLDivElement>(null);
    const midBar1 = useRef<HTMLDivElement>(null);
    const midBar2 = useRef<HTMLDivElement>(null);
    const bottomBar = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const hamburgerOnTl = gsap.timeline({ paused: false })
        .set([topBar, bottomBar], {
            transformOrigin: '50% 50%'
        });
    }, { dependencies: [hamburgerState]});

    return (
        <header className={s.Header}>
            <motion.a 
                className={s.logo} href="/" 
                whileHover={{ 
                    scale: 1.01, 
                    '--beforeOpacity': 1, 
                    transition: { duration: 0.4, ease: 'easeOut' }
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}>
            </motion.a>

            <button className={`${s.Hamburger} ${s.btn} btn`}>
                <div className={s.TopBar}    ref={topBar}   ></div>
                <div className={s.MidBar1}    ref={midBar1}  ></div>
                <div className={s.MidBar2}    ref={midBar2}  ></div>
                <div className={s.BottomBar} ref={bottomBar}></div>
            </button>
        </header>
    );
}

export default Header;