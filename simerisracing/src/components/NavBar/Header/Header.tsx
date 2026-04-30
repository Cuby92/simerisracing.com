'use client';

import styles from './Header.module.scss';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const s = styles;

function Header() {
    const [hamburgerState, setHamburgerState] = useState(false);
    function toggleHamburger() {
        setHamburgerState(prev => !prev);
    }
    
    const hamburger = useRef<HTMLButtonElement>(null);
    const topBar = useRef<HTMLDivElement>(null);
    const midBar1 = useRef<HTMLDivElement>(null);
    const midBar2 = useRef<HTMLDivElement>(null);
    const bottomBar = useRef<HTMLDivElement>(null);

    const onTl = useRef<gsap.core.Timeline | null>(null);

    const hamburgerSize = 2.5;
    const hamburgerLineThickness = 0.3;

    function rem(size: number) {
        return String(size) + 'rem';
    }

    useGSAP(() => {
        if (topBar.current && bottomBar.current && midBar1.current && midBar2.current && typeof window != 'undefined') {
            if (!onTl.current) {
                onTl.current = gsap.timeline({ paused: true })
                    .set([topBar.current, bottomBar.current], {
                        transformOrigin: '0 50%'
                    })
                    .set(midBar1.current, {
                        transformOrigin: '0 50%'
                    })
                    .set(midBar2.current, {
                        transformOrigin: '100% 50%'
                    })
                    .to(midBar1.current, {
                        x: '-100%',
                        y: '50%',
                        borderRadius: rem(hamburgerLineThickness / 3),
                        height: rem(hamburgerLineThickness / 2),
                        width: '30%',
                        duration: 0.25,
                        ease: 'power4.out'
                    })
                    .to(midBar2.current, {
                        x: '100%',
                        y: '50%',
                        borderRadius: rem(hamburgerLineThickness / 3),
                        height: rem(hamburgerLineThickness / 2),
                        width: '30%',
                        duration: 0.2,
                        ease: 'power4.out'
                    }, '-=90%')
                    .to(hamburger.current, {
                        rotate: 90,
                        duration: 0.3,
                        ease: 'easeInOut'
                    }, '-=60%')
                    .to(topBar.current, {
                        rotate: 45,
                        duration: 0.3
                    })
                    .to(bottomBar.current, {
                        rotate: -45,
                        duration: 0.3
                    }, '-=70%')
                    .to(topBar.current, {
                        x: rem(hamburgerLineThickness * 1.2),
                        y: rem(hamburgerLineThickness / 2 * 1.2),
                        duration: 0.3
                    }, '-=30%')
                    .to(bottomBar.current, {
                        x: rem(hamburgerLineThickness * 1.2),
                        y: rem(-hamburgerLineThickness / 2 * 1.2),
                        duration: 0.3
                    }, '-=100%')
            }
            if (hamburgerState) {
                onTl.current.time(0).play();
            } else {
                onTl.current.reverse();
            }
        }
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

            <button className={`${s.Hamburger} ${s.btn} btn`} onClick={toggleHamburger} ref={hamburger}>
                <div className={s.TopBar}    ref={topBar}   ></div>
                <div className={s.MidBar1}   ref={midBar1}  ></div>
                <div className={s.MidBar2}   ref={midBar2}  ></div>
                <div className={s.BottomBar} ref={bottomBar}></div>
            </button>
        </header>
    );
}

export default Header;