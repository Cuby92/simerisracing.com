import styles from './Footer.module.css';
import Link from 'next/link';

const s = styles;

function Footer() {
    return (
        <footer className={s.Footer}>
            <Link className={`${s.a} a`} href='/'>Home Page</Link>
            <Link className={`${s.a} a`} href='/about'>About</Link>
            <Link className={`${s.a} a`} href='/products'>Products</Link>
            <Link className={`${s.a} a`} href='/contact'>Contact</Link>
        </footer>
    );
}

export default Footer;