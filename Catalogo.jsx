import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';

class Catalogo extends React.Component {
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
            <div className="imagen-fondo-principal container-catalogo-productos">
                <MenuOpciones />
                <div className="panel-catalogo-productos panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">Catálogo de productos</span>
                    <div className="formulario-buscar navbar-right">
                        <label htmlFor="buscador">¿Que estas buscando?</label>
                        <input type="text"/>
                    </div>
                    </div>
                    <div className="panel-body">
                        <div className="item-producto">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalogo;