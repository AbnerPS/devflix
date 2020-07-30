import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [valuesForm, setValuesForm] = useState({ nome: '', desc: '', cor: '' });

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const result = await response.json();
      setCategorias(result);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, valuesForm]);
  }

  function setValue(key, value) {
    setValuesForm({
      ...valuesForm,
      [key]: value,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;

    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return (
    <Layout>
      <h1>Cadastre suas categorias aqui</h1>
      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          onChange={handleChange}
        />

        <FormField
          tag="textarea"
          label="Descrição da categoria"
          type="textarea"
          name="desc"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          onChange={handleChange}
        />

        <Button as="button">Salvar</Button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}-${indice}`}>
            { categoria.nome }
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </Layout>
  );
}

export default CadastroCategoria;
