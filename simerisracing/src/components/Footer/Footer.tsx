import styles from './Footer.module.scss';
import Link from 'next/link';
import FooterLink from '@/components/links/footer';

const s = styles;

function Footer() {
    return (
        <footer className={s.Footer}>
            <nav className={s.nav}>
                <FooterLink className={`${s.a} a`} href='/'>Home</FooterLink>
                <FooterLink className={`${s.a} a`} href='/products'>Products</FooterLink>
                <FooterLink className={`${s.a} a`} href='/about'>About</FooterLink>
                <FooterLink className={`${s.a} a`} href='/contact'>Contact</FooterLink>
            </nav>
        </footer>
    );
}

export default Footer;