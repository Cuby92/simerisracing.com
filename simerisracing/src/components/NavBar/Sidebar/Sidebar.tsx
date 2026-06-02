'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/links/sidebar';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useState } from 'react';

const s = styles;

function Sidebar({ open, headerHeight }: { open: boolean; headerHeight: number }) {
    useGSAP(() => {
        if (typeof window != 'undefined') {
            if (open) {
                gsap.to('.' + s.Sidebar, {
                    top: 0,
                    duration: 1,
                    ease: 'back.out(1)'
                });
            } else {
                gsap.to('.' + s.Sidebar, {
                    top: '-100%',
                    duration: 1,
                    ease: 'back.in(1)'
                });
            }
        }
    }, { dependencies: [open] });

    const [activeLink, setActiveLink] = useState(0);

    function setActive(link: number) {
        switch (link) {
            case 1:
                setActiveLink(1);
                break;
            case 2:
                setActiveLink(2);
                break;
            case 3:
                setActiveLink(3);
                break;
            case 4:
                setActiveLink(4);
                break;
            default:
                setActiveLink(0);
                break;
        }
    }

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} onMouseLeave={ () => setActive(0) }>
            <div className={s.section}>
                <nav className={s.MainCategories}>
                    <SidebarLink onMouseEnter={ () => setActive(1)} active={activeLink === 1} href='/'        >Home</SidebarLink>
                    <SidebarLink onMouseEnter={ () => setActive(2)} active={activeLink === 2} href="/products">Products</SidebarLink>
                    <SidebarLink onMouseEnter={ () => setActive(3)} active={activeLink === 3} href="/about"   >About</SidebarLink>
                    <SidebarLink onMouseEnter={ () => setActive(4)} active={activeLink === 4} href="/contact" >Contact</SidebarLink>
                </nav>
            </div>

            <div className={s.divider}></div>

            <div className={s.section}>
                <nav className={s.Subcategories}>
                    <Image 
                        src="/img/logo/icon-gradient.svg" 
                        alt="Icon" 
                        width={50} 
                        height={50} 
                        className={s.Icon}
                        style={{ opacity: activeLink === 0 ? 0.2 : 0.15, filter: activeLink === 0 ? 'grayscale(0)' : 'grayscale(100%)' }}
                    />
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;