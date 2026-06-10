import Link, { type LinkProps } from 'next/link';
import styles from './StdLink.module.scss';
import { ComponentProps } from 'react';

const s = styles;

type Props = ComponentProps<typeof Link>;

function StdLink(props: Props) {
    return (
        <Link className={s.Link} {...props} />
    );
}

export default StdLink;