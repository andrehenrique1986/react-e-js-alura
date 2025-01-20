import styles from './Banner.module.css';

const Banner = ({ imagem }) => {
    return(
       <div className={styles.capa}
             style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}>

       </div>
    )
}

export default Banner;