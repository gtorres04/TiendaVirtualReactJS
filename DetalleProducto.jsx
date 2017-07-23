import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';
import { Link } from 'react-router-dom';
import Utilidades from './Utilidades';

class DetalleProducto extends React.Component {
    constructor() {
      super();
		
      this.state = {
         producto: {}
      }

    }

    render(){
        return (
            <div className="imagen-fondo-principal">
                <MenuOpciones cantidadPedidos={Utilidades.productosPedidos.length} />
                <div className="panel-detalle-producto panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">{this.state.producto.nombre}</span>
                    </div>
                    <div className="panel-body">
                        <div className="container-info">
                            <div className="imagen-producto">
                            <img src={Utilidades.server+"assets/img/"+this.state.producto.imagen} alt={this.state.producto.nombre}/>
                            </div>
                            <div className="info-producto">
                            <ul>
                                <li><label>Nombre:&nbsp;</label>{this.state.producto.nombre}</li>
                                <li><label>Precio:&nbsp;</label>${this.state.producto.precio}</li>
                                <li><label>Unidades Disponibles:&nbsp;</label>{this.state.producto.unidadesDisponibles}</li>
                            </ul>
                            </div>
                        </div>
                    <Link to="/catalogo" className="boton-volver btn btn-default">Atras</Link>
                    </div>
                </div>  
            </div>
        );
    }
    componentWillMount(){
        console.log(this.props.match.params.idProducto);
        this.getProducto();
    }
    /**
     * Consultar los productos existentes
     */
    getProducto(){
        request
            .get('https://tienda-9303e.firebaseio.com/productos.json')
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                console.log(res.body);
                let productosRecuperados = res.body;
                let productoEncontrado = undefined;
                for (var index = 0; index < productosRecuperados.length; index++) {
                    var element = productosRecuperados[index];
                    if(element.id == this.props.match.params.idProducto){
                        productoEncontrado = element;
                    }
                }
                this.setState({
                    producto: productoEncontrado
                });
            })
    }
    
}
export default DetalleProducto;