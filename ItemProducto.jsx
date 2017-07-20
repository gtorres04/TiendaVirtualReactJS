import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';

class ItemProducto extends React.Component {
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
            <div className="panel-item-producto panel panel-default">
                <div className="panel-body">
                    <img className="imagen-producto" src="./assets/img/kjhgjgh.png" alt=""/>
                    <h4>Nombre Producto</h4>
                    <div>
                        <label for="">Precio:&nbsp;</label><span>$400</span>
                    </div>
                    <div>
                        <label for="">Unidades Disponibles:&nbsp;</label><span>400</span>
                    </div>
                    <div>
                        <Link className="btn btn-primary">Ver Mas</Link>
                        <Link className="btn btn-warning">Añadir</Link>
                        <input type="number" name="cantidadAgregar"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemProducto;