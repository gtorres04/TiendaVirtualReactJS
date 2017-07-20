import React from 'react';
import IniciarSesion from './IniciarSesion.jsx';
import App from './App.jsx';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {IniciarSesion} />
            <Route path = '/catalogo' component = {App} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
)