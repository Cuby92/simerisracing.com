'use client';

import styles from './Sidebar.module.scss';
import MainCategoryLink from '@/components/links/sidebar/main-categories';
import SubcategoryLink from '@/components/links/sidebar/subcategories';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useState } from 'react';

const s = styles;

interface Props {
    open: boolean;
    headerHeight: number;
    setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ open, headerHeight, setSidebarOpen } : Props) {
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
            <div className={s.Section1}>
                <nav className={s.MainCategories}>
                    <MainCategoryLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(1)} active={activeLink === 1} href='/'        >Home</MainCategoryLink>
                    <MainCategoryLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(2)} active={activeLink === 2} href="/products">Products</MainCategoryLink>
                    <MainCategoryLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(3)} active={activeLink === 3} href="/about"   >About</MainCategoryLink>
                    <MainCategoryLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(4)} active={activeLink === 4} href="/contact" >Contact</MainCategoryLink>
                </nav>
            </div>

            <div className={s.divider}></div>

            <div className={s.Section2}>
                <div className={s.Subcategories}>
                    <Image 
                        src="/img/logo/icon-gradient.svg" 
                        alt="Icon" 
                        width={50} 
                        height={50} 
                        className={s.Icon}
                        style={{ opacity: activeLink < 2 ? 0.3 : 0.2 }}
                    />

                    <nav className={`${s.ProductsCategories} ${s.subcategory}`} style={{ opacity: activeLink === 2 ? 1 : 0, pointerEvents: activeLink === 2 ? 'auto' : 'none' }}>
                        <SubcategoryLink className={s.link} href="/products/panther-hp"><span style={{ fontWeight: 400 }}>PANTHER</span>HP</SubcategoryLink>
                    </nav>

                    <section className={`${s.About} ${s.subcategory}`} style={{ opacity: activeLink === 3 ? 1 : 0, pointerEvents: activeLink === 3 ? 'auto' : 'none' }}>
                        <p>SIMERIS RACING builds dependable sim racing gear designed by racers, for racers. We focus on <strong>practical engineering, premium quality</strong>, and <strong>long-term reliability</strong> to create hardware you can <strong>trust</strong> every time you race.</p>
                    </section>

                    <section className={`${s.ContactInfo} ${s.subcategory}`} style={{ opacity: activeLink === 4 ? 1 : 0, pointerEvents: activeLink === 4 ? 'auto' : 'none' }}>
                        <a className={`${s.IG} ${s.item}`} href="https://www.instagram.com/simeris.racing/" target="_blank">
                            <div className={s.icon}></div>
                            <p className={s.caption}>@simerisracing</p>
                        </a>
                        <a className={`${s.Mail} ${s.item}`} href="mailto:shop@simerisracing.com">
                            <div className={s.icon}></div>
                            <p className={s.caption}>shop@simerisracing.com</p>
                        </a>
                        <a className={`${s.DC} ${s.item}`} href="https://discord.gg/YmfTp5R3Jd" target="_blank">
                            <div className={s.icon}></div>
                            <p className={s.caption}>Join Our Discord Server</p>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;