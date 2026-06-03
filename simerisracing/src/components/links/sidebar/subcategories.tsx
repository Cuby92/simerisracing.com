import styles from './../links.module.scss';
import { LinkProps } from '../functions';
import Link from 'next/link';
import { motion } from 'motion/react';

const s = styles;

interface Props extends LinkProps {
    onMouseEnter?: () => void;
    onClick?: () => void;
}

function SubcategoryLink({ children, href, className, onMouseEnter, onClick } : Props) {
    const MotionLink = motion.create(Link);

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.subcategoryLink}`}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            { children }
        </MotionLink>
    );
}

export default SubcategoryLink;