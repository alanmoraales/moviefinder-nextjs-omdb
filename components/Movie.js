import styles from './Movie.module.css';

import Poster from './Poster';


class Movie extends React.Component {
    render() {
        return(
            <div className={styles.movie} > 
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