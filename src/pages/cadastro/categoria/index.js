import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/page-default";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function insertValue(info) {
    // const { getAttribute, value } = info.target;
    setValue(info.target.getAttribute("name"), info.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome} </h1>

      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValue(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={insertValue}
        />
        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={insertValue}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={insertValue}
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, idx) => {
          return <li key={idx}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
