import Head from 'next/head';

import Logo from '../res/svg/Logo.svg';
import styles from './index.module.css';

import SearchBar from '../components/SearchBar';
import GithubBtn from '../components/GithubBtn';

class Index extends React.Component {
    render() {
        return(
            <div className={styles.maingrid}>
                <div className={styles.image}>
                    <div>
                        <a href="https://www.pexels.com/es-es/foto/actuacion-adentro-audiencia-auditorio-2774556/" 
                            target="blank">
                            Taken by Luis Quintero on Pexels
                        </a>
                    </div>
                </div>
                <div className={styles.searchgrid}>
                    <div>
                        <Logo id={styles.logo}/>
                        <SearchBar/>
                    </div>
                    <div id={styles.github}><GithubBtn/></div>
                </div>
            </div>
        )
    };
};

export default Index;