import styles from './NavBar.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const s = styles;

function NavBar() {
    return (
        <nav>
            <Header />
        </nav>
    );
}

export default NavBar;