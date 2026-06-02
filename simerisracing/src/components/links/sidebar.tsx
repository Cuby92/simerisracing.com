import styles from './links.module.scss';
import { LinkProps } from './functions';
import Link from 'next/link';
import { motion } from 'motion/react';

const s = styles;

interface SidebarLinkProps extends LinkProps {
    onMouseEnter?: () => void;
}

function SidebarLink({ children, href, className, active = false, visited = false, onMouseEnter } : SidebarLinkProps) {
    const MotionLink = motion.create(Link);

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.sidebarLink}`}
            style={ active ? { x: '2.2rem', scale: 1.01, fontWeight: 300 } : {} }
            onMouseEnter={onMouseEnter}
        >
            { active ? <span style={{ color: '#f0f', transition: 'color 0.5s ease-in-out' }}>//</span> : <span style={{ color: '#f0f0', transition: 'color 0.5s ease-in-out' }}>//</span> } { children }
        </MotionLink>
    );
}

export default SidebarLink;