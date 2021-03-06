import styles from './[terms].module.css';

import Header from '../../components/Header';
import Movies from '../../components/Movies';


class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            terms: ""
        }
    }

    static async getInitialProps(ctx) {
        const { terms } = ctx.query;
        let finalTerms = terms.replace('-', ' ');

        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=7011a24a&s=${finalTerms}`);
        const resJson = await res.json();

        return {results: resJson, terms: finalTerms};
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.results}>
                    <div className={styles.header}><Header/></div>
                    <div>results for:</div>
                    <div className={styles.terms}>{this.props.terms}</div>
                    <div className={styles.movies}>
                        {(this.props.results.Search ? <Movies movies={this.props.results.Search} posterHeight={230}/> : "No results were found.")}
                    </div>
                </div>
            </div>
        );
    };
};

export default Results;