import React from "react";
import Menu from "../../components/menu";
import BannerMain from "../../components/BannerMain";
import Footer from "../../components/Footer";
import dados from "../../data/dados_iniciais.json";
import Carousel from "../../components/Carousel"

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

      {dados.categorias.map((categoria) => (
        <Carousel key={categoria.cor} category={categoria} />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
