import styles from './Movies.module.css';

import Movie from './Movie';

class Movies extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const movies = this.props.movies;
        const width = this.props.posterHeight * (2/3);

        return(
            <div className={styles.moviesFlex}>
                {movies.map(movie => {
                    if(movie.Poster != 'N/A') {
                        return <div key={movie.imdbID} className={styles.movie}>
                                <Movie image={movie.Poster} title={movie.Title}
                                    imgHeight={this.props.posterHeight}
                                    imgWidth={width}/>
                            </div>
                    }
                    
                })}
            </div>
        )
    }
}

export default Movies;