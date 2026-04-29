import styles from './Footer.module.scss';
import Link from 'next/link';

const s = styles;

function Footer() {
    return (
        <footer className={s.Footer}>
            <nav className={s.nav}>
                <Link className={`${s.a} a`} href='/'>Home</Link>
                <Link className={`${s.a} a`} href='/products'>Products</Link>
                <Link className={`${s.a} a`} href='/about'>About</Link>
                <Link className={`${s.a} a`} href='/contact'>Contact</Link>
            </nav>
        </footer>
    );
}

export default Footer;