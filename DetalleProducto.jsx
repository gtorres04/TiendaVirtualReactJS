import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';
import { Link } from 'react-router-dom';

class DetalleProducto extends React.Component {
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
                    <span className="panel-title">Nombre del Producto</span>
                    </div>
                    <div className="panel-body">
                    <div className="container-info">
                        <div className="imagen-producto">
                        <img src="./assets/img/{{producto.imagen}}" alt="{{producto.nombre}}"/>
                        </div>
                        <div className="info-producto">
                        <ul>
                            <li><label>Nombre:&nbsp;</label>Nombre producto</li>
                            <li><label>Precio:&nbsp;</label>$40000</li>
                            <li><label>Unidades Disponibles:&nbsp;</label>400</li>
                        </ul>
                        </div>
                    </div>
                    <Link className="boton-volver btn btn-default">Atras</Link>
                    </div>
                </div>  
            </div>
        );
    }
}
export default DetalleProducto;