import styles from './Header.module.css';

import Logo from '../res/svg/Logo.svg';
import SearchBar from './SearchBar';


class Header extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.logo}><Logo id={styles.logo}/></div>
                <div className={styles.searchbar}><SearchBar/></div>
            </div>
        )
    }
}

export default Header;