import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css";
import rickLutador from "../../components/Card/Rick Lutador 4.jfif";

const Favoritos = () => {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section>
        <Card id='2' titulo='Rick Lutador' capa={rickLutador}/>
      </section>
    </>
  );
};

export default Favoritos;
