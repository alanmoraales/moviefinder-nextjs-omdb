import styles from './Poster.module.css';

class Poster extends React.Component {
    render() {
        return( 
            
            <div className={styles.portview} style={{width:this.props.width, height:this.props.height}}>
                <img src={this.props.image}   
                    alt="poster"/>
            </div>
            
        )
    }
}

export default Poster;