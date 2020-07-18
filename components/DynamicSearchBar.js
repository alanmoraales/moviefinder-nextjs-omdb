import SearchBar from './SearchBar';

import styles from './DynamicSearchBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class DynamicSearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }

        this.checkWidth = this.checkWidth.bind(this);
        this.iconClicked = this.iconClicked.bind(this);
    }

    componentDidMount() {
        this.checkWidth();
        window.addEventListener('resize', this.checkWidth);
    }

    checkWidth() {
        if(window.innerWidth > 700) {
            this.setState({expanded: true});
        } else {
            this.setState({expanded: false});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkWidth);
    }

    iconClicked() {
        if(this.state.expanded === true) {
            this.setState({expanded: false});
        } else {
            this.setState({expanded: true});
        }

        //this.search.input.focus();
    }

    render() {
        if(!this.state.expanded) {
            return(
                <button onClick={this.iconClicked} type="submit" className={styles.button}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            )
        } else {
            return(
                <SearchBar /*ref={(s) => { this.search = s; }}*//>
            )
        }
        
    }
}

export default DynamicSearchBar;