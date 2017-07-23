import React from 'react';
import * as request from 'superagent';
import { Link } from 'react-router-dom';

class MenuOpciones extends React.Component {
    constructor() {
      super();
		
      this.state = {
         mostrarErrorCorreo: 'ocultar-elemento',
         mostrarErrorContrasena: 'ocultar-elemento',
         mostrarErrorForm: 'ocultar-elemento',
         msnErrorForm: 'Error desconocido'
      }

    }

    render(){
        return (
            <nav className="barra-navegacion navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Desplegar navegación</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to='/catalogo'>La Bodega</Link>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'><span className="glyphicon glyphicon-th"></span></Link></li>
                    <li><Link to='/pedido'><span className="glyphicon glyphicon-shopping-cart"></span><span className="badge">{this.props.cantidadPedidos}</span></Link></li>
                    <li><Link to='/'><span className="glyphicon glyphicon-inbox"></span></Link></li>
                    <li><Link to='/'><span className="glyphicon glyphicon-log-out"></span></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuOpciones;