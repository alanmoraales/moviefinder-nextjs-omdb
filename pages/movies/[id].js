import styles from './[id].module.css';

import Header from '../../components/Header';
import Poster from '../../components/Poster';

class MovieInfo extends React.Component {

    static async getInitialProps(ctx) {
        const { id } = ctx.query;

        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7011a24a`);
        const resJson = await res.json();

        return { movie: resJson};
    }


    render() {
        let movie = this.props.movie;
        let posterHeight = 270;
        let posterWidth = posterHeight * (2/3);

        return(
            <div className={styles.content}>
                <div className={styles.container}>
                    <Header/>
                    <div className={styles.grid}>
                        <div className={styles.title}>{movie.Title}</div>
                        <div>{movie.Year}</div>
                        <div className={styles.detailsGrid}>
                            <div className={styles.poster}><Poster height={posterHeight} width={posterWidth} image={movie.Poster}/></div>
                            <div className={styles.detailsFlex}>    
                                {movie.Genre ? <p>Genre: {movie.Genre}</p> : <p>Genre: N/A</p>}
                                {movie.Runtime ? <p>Duration: {movie.Runtime}</p> : <p>Duration: N/A</p>}
                                {movie.Released ? <p>Released: {movie.Released}</p> : <p>Released: N/A</p>}
                                {movie.Ratings[0] ? <p>Rate: {movie.Ratings[0].Value}</p> : <p>Rate: N/A</p>}
                                {movie.Actors ? <p>Actors: {movie.Actors}</p> : <p>Actors: N/A</p>}
                            </div>
                            <div>
                                <div className={styles.subtitle}>Overview</div>
                                {movie.Plot ? <div>{movie.Plot}</div> : <div>N/A</div>}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieInfo;