'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Page, DivRef, Div, AnyElement } from '@/utils/ref-types';
import { filterElement } from '@/utils/functions';
import banner from '@/../public/img/panther-hp-transparent.png';

gsap.registerPlugin(ScrollTrigger);

const s = styles;

interface BannerPage extends Page {
    bg:     DivRef;
    banner: DivRef;
}

function PantherHP() {
    const bannerPage: BannerPage = {
        bg:     useRef<Div>(null),
        banner: useRef<Div>(null),
        page:   useRef<AnyElement>(null)
    }

    useGSAP(() => {
        if (!bannerPage.page.current) return;

        gsap.to(filterElement(bannerPage.bg), {
            opacity: 0,
            scrollTrigger: {
                trigger: bannerPage.page.current,
                scrub: true,
                start: 'bottom 90%',
                end: 'bottom top'
            },
            ease: 'linear'
        });
    });

    useGSAP(() => {
        if (!bannerPage.page.current) return;

        gsap.to(filterElement(bannerPage.banner), {
            scrollTrigger: {
                trigger: bannerPage.page.current,
                scrub: true,
                start: 'bottom bottom',
                end: '30% top'
            },
            ease: 'linear',
            filter: 'grayscale(100%)'
        });
    });

    return (
        <>
            <section className={`page ${s.BannerPage}`} ref={bannerPage.page}>
                <div className={s.bg} ref={bannerPage.bg} />
                <div className={s.bannerWrapper} ref={bannerPage.banner}>
                    <Image 
                        alt="PANTHER HP"
                        src={banner}
                        width={2560}
                        height={2560}
                        className={s.banner}
                        placeholder="blur"
                    />
                </div>
            </section>

            <section className={`page ${s.Heading}`}>
                <h1>Comming soon...</h1>
            </section>
        </>
    );
}

export default PantherHP;