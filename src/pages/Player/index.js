import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Player.module.css';
import NaoEncontrada from '../NaoEncontrada';
import { useEffect, useState } from 'react';

const Player = () => {

    const [video, setVideo] = useState([]);
    const parametros = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/andrehenrique1986/react-e-js-alura/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados);
        });
    }, []);

    if(!video){
        return <NaoEncontrada />
    }

    return(
        <>
         <Banner imagem="player"/>   
         <Titulo>
            <h1>Player</h1>
         </Titulo>
         <section className={styles.container}>
            <iframe 
            width="100%" 
            height="100%" 
            src={video.link}
            title={video.titulo}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
         </section>
        </>
    )
}

export default Player;