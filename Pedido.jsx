import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';

class Pedido extends React.Component {
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
            <div className="imagen-fondo-principal">
                <MenuOpciones />
                <div className="panel-detalle-producto panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">Carrito de Compras</span>
                    </div>
                    <div className="panel-body">
                    <div className="container-info">
                        <div className="lista-pedidos">
                        <ul className="media-list">
                            <li className="media">
                            <a className="pull-left" href="javascript:;">
                                <img className="media-object imagen-pedidos" src="./assets/img/{{producto.imagen}}" alt="{{producto.nombre}}"/>
                            </a>
                            <div className="media-body">
                                <h4 className="media-heading">Nombre del Producto</h4>
                                <label>Unidades:</label>400<br/>
                                <label>SUBTOTAL:</label>$1200<br/>
                            </div>
                            </li>
                        </ul>
                        </div>
                        <div className="total-pedido">
                        <h2>Total: 5000</h2>
                        <a href="javascript:;" className="boton-volver btn btn-default">Cancelar</a>
                        <a href="javascript:;" className="boton-volver btn btn-default">Pagar</a>
                        </div>
                    </div>
                        <a href="javascript:;" className="boton-volver btn btn-default">Atras</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pedido;