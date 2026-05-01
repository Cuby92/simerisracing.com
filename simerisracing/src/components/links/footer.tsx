'use client';

import Link from 'next/link';
import { LinkProps } from './functions';
import { motion } from 'motion/react';
import styles from './links.module.scss';

const s = styles;

function FooterLink({ children, href, className, visited = false }: LinkProps) {
    const MotionLink = motion.create(Link);
    return (
        <MotionLink 
            href={href} 
            className={`a ${className} ${s.footerLink}`}
            scroll={false}
            whileHover={{
                scale: 1.05,
                color: '#0000',
                transition: {
                    duration: 0.4
                },
                '--underlineWidth': '100%'
            }}
        >
            { children }
        </MotionLink>
    );
}

export default FooterLink;