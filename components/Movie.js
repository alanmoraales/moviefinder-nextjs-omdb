import styles from './Movie.module.css';

import Poster from './Poster';
import Router from 'next/router';


class Movie extends React.Component {
    
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        Router.push('/movies/[id]', `/movies/${this.props.imdbID}`);
    }

    render() {
        return(
            <div className={styles.movie} onClick={this.onClick}> 
                <div className={styles.poster}>
                    <Poster image={this.props.image} 
                            height={this.props.imgHeight}
                            width={this.props.imgWidth}/>
                </div>
                <div className={styles.title} style={{maxWidth:this.props.imgWidth}}>
                    {this.props.title}</div>
            </div>
        )
    }
    
}

export default Movie;