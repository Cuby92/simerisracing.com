'use client';

import styles from './Sidebar.module.scss';
import MainCategoryLink from '@/components/links/sidebar/main-categories';
import SubcategoryLink from '@/components/links/sidebar/subcategories';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useState } from 'react';

const s = styles;

function Sidebar({ open, headerHeight }: { open: boolean; headerHeight: number }) {
    useGSAP(() => {
        if (typeof window != 'undefined') {
            if (open) {
                gsap.set(`.${s.MainCategories} .${s.link}`, { 
                    transition: 'none',
                });
                gsap.to('.' + s.Sidebar, {
                    top: 0,
                    duration: 1,
                    ease: 'back.out(1)'
                });
                gsap.fromTo(`.${s.MainCategories} .${s.link}`, {
                    opacity: 0,
                    x: -30,
                }, {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.5,
                    stagger: 0.1,
                    x: 0,
                    ease: 'power1.out',
                });
                gsap.from(`.${s.Sidebar} .${s.divider}`, {
                    duration: 0.5,
                    delay: 1,
                    height: 0
                });
                gsap.set(`.${s.MainCategories} .${s.link}`, { 
                    transition: 'transform 0.5s ease-in-out, font-weight 0.5s ease-in-out',
                    delay: 1.4,
                    ease: 'power4.out'
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
                    <MainCategoryLink className={s.link} onMouseEnter={ () => setActive(1)} active={activeLink === 1} href='/'        >Home</MainCategoryLink>
                    <MainCategoryLink className={s.link} onMouseEnter={ () => setActive(2)} active={activeLink === 2} href="/products">Products</MainCategoryLink>
                    <MainCategoryLink className={s.link} onMouseEnter={ () => setActive(3)} active={activeLink === 3} href="/about"   >About</MainCategoryLink>
                    <MainCategoryLink className={s.link} onMouseEnter={ () => setActive(4)} active={activeLink === 4} href="/contact" >Contact</MainCategoryLink>
                </nav>
            </div>

            <div className={s.divider}></div>

            <div className={s.section}>
                <div className={s.Subcategories}>
                    <Image 
                        src="/img/logo/icon-gradient.svg" 
                        alt="Icon" 
                        width={50} 
                        height={50} 
                        className={s.Icon}
                        style={{ opacity: activeLink === 0 ? 0.2 : 0.15, filter: activeLink === 0 ? 'grayscale(0)' : 'grayscale(100%)' }}
                    />
                    <nav className={`${s.ProductsCategories} ${s.subcategory}`} style={{ opacity: activeLink === 2 ? 1 : 0, pointerEvents: activeLink === 2 ? 'auto' : 'none' }}>
                        <SubcategoryLink className={s.link} href="/products/panther-hp"><span style={{ fontWeight: 400 }}>PANTHER</span>HP</SubcategoryLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;