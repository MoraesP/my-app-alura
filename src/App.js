import React from "react";
import Menu from "./components/menu";
import BannerMain from "./components/BannerMain";
import dados from "./data/dados_iniciais.json";
function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />
    </div>
  );
}

export default App;
