import styles from './GithubBtn.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

class GithubBtn extends React.Component {
    render() {
        return(
            <a href="https://github.com/alanmoraales" target="blank" className={styles.botton}>
                <div className={styles.grid}>
                    <div className={styles.githublogo}><FontAwesomeIcon icon={faGithub}/></div>
                    <div>see project on Github</div>
                </div>
            </a>
        )
    }
}

export default GithubBtn;