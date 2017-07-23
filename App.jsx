import React from 'react';
import { Link } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Catalogo from './Catalogo.jsx';
import DetalleProducto from './DetalleProducto.jsx';
import Pedido from './Pedido.jsx';
import Utilidades from './Utilidades';

class App extends React.Component {
    constructor() {
      super();
		
      this.state = {
         productosPedidos: []
      }

    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path = '/catalogo' component = {Catalogo}/>
                    <Route path = '/catalogo/detalle-producto/:idProducto' component = {DetalleProducto} />
                    <Route path = '/catalogo/pedido' component = {Pedido} />
                </Switch>
            </div>
        );
    }
}

export default App;