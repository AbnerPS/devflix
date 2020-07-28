import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../pages/Page404'
import CadastroVideo from '../pages/Cadastros/Video'
import CadastroCategoria from '../pages/Cadastros/Categoria'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/cadastro/video" component={ CadastroVideo } />
                <Route path="/cadastro/categoria" component={ CadastroCategoria } />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;