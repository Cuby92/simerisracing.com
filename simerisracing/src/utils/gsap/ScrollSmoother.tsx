'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin);

function ScrollSmootherWrapper({ children } : { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window === undefined) return;
        if (!wrapperRef.current || !contentRef.current) return;

        ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            smoothTouch: 0.1,
            effects: true
        });
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.replace('#', '');
                setTimeout(() => {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        gsap.to(window, {
                            scrollTo: targetElement,
                            duration: 1,
                            ease: "power2.inOut"
                        });
                    }
                }, 500);
            }
        }
    }, []);

    return (
        <div ref={wrapperRef} id="smooth-wrapper" style={{ position: 'fixed', overflow: 'hidden', width: '100%', height: '100%', inset: 0 }}>
            <div ref={contentRef} id="smooth-content">
                { children }
            </div>
        </div>
    );
}

export default ScrollSmootherWrapper;