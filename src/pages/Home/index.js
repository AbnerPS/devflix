import React from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout'
import data from '../../data/dados_iniciais.json'

function Home() {
    return (
        <div className="App">
            <Layout>
                <BannerMain
                    videoTitle={data.categorias[0].titulo}
                    videoDescription={"O que é Front-end ? O que um desenvolvedor frontend faz ? Trabalhando  na área de tecnologia."}
                    url={data.categorias[0].videos[0].url}
                />

                <Carousel
                    ignoreFirstVideo
                    category={data.categorias[0]}
                />

                <Carousel
                    category={data.categorias[1]}
                />

                <Carousel
                    category={data.categorias[2]}
                />

                <Carousel
                    category={data.categorias[3]}
                />

                <Carousel
                    category={data.categorias[4]}
                />

                <Carousel
                    category={data.categorias[5]}
                />
            </Layout>
        </div>
    );
}

export default Home;
