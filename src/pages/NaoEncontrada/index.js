import styles from './NaoEncontrada.module.css';

const NaoEncontrada = () => {
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;