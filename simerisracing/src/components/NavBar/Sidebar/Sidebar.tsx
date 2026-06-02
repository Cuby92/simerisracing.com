'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/links/sidebar';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

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

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }}>
            <div className={s.section}>
                <nav className={s.MainCategories}>
                    <SidebarLink href='/'>Home</SidebarLink>
                    <SidebarLink href="/products">Products</SidebarLink>
                    <SidebarLink href="/about">About</SidebarLink>
                    <SidebarLink href="/contact">Contact</SidebarLink>
                </nav>
            </div>

            <div className={s.section}>
                <nav className={s.Subcategories}>
                    <Image 
                        src="/img/logo/icon-gradient.svg" 
                        alt="Icon" 
                        width={50} 
                        height={50} 
                        className={s.Icon} 
                    />
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;