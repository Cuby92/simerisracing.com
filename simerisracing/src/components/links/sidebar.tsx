import styles from './links.module.scss';
import { LinkProps } from './functions';
import Link from 'next/link';
import { motion } from 'motion/react';

const s = styles;

function SidebarLink({ children, href, className, active = false, visited = false } : LinkProps) {
    const MotionLink = motion.create(Link);

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.sidebarLink}`}
            whileHover={ !active ? { scale: 1.01, '--underlineWidth': '100%' } : {}}
            style={ active ? { marginLeft: '2rem', scale: 1.01, fontStyle: 'oblique 10deg' } : {} }
        >
            { active ? <span style={{ color: '#f0f' }}>//</span> : '' } { children }
        </MotionLink>
    );
}

export default SidebarLink;