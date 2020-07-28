import React from 'react'
import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import Layout from '../../../components/Layout'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return (
        <Layout>
            <h1>Cadastre suas categorias aqui</h1>

            <form>

                <label>
                    Nome da Categoria:
          <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
        </button>
            </form>


            <Link to="/">
                Ir para home
      </Link>
        </Layout>
    )
}

export default CadastroCategoria;