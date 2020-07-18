import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            terms: ""
        }

        this.handleEntry = this.handleEntry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEntry(e) {
        this.setState({terms: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.terms != '') {
            let finalTerms = this.state.terms.replace(' ', '-');
            Router.push('/search/[terms]', `/search/${finalTerms}`);

        } else {
            alert("Please enter search terms.");
        }
    }

    render() {
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="search by name" className={styles.input}
                    onChange={this.handleEntry}
                    /*ref={(input) => { this.nameInput = input; }}*/>
                </input>
                <button type="submit" className={styles.button}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
        )
    }
}

export default SearchBar;