import React from "react";
import PageDefault from "../../../components/page-default";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Pagina de cadastro de video</h1>

      <Link to="/cadastro/categoria">Cadastro Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
