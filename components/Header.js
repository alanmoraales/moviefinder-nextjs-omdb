import styles from './Header.module.css';

import Link from 'next/link';

import Logo from '../res/svg/Logo.svg';
import SearchBar from './SearchBar';


class Header extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/"><Logo id={styles.logo}/></Link>
                </div>
                <div className={styles.searchbar}><SearchBar/></div>
            </div>
        )
    }
}

export default Header;