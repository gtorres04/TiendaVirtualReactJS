import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';
import ItemProducto from './ItemProducto.jsx';
import Utilidades from './Utilidades';

class Catalogo extends React.Component {
    constructor() {
      super();
		
      this.state = {
         mostrarErrorCorreo : 'ocultar-elemento',
         mostrarErrorContrasena : 'ocultar-elemento',
         mostrarErrorForm : 'ocultar-elemento',
         msnErrorForm : 'Error desconocido',
         mensaje :'hola soy un mensaje desde el catalogo',
         productos : [],
         productosConsulta: [],
         patronBusqueda: '',
         productosPedidos: []
      }

      this.getProductos();

    }

    render(){
        var indents = [];
        var productos = this.state.productosConsulta;
        for (var i = 0; i < productos.length; i++) {
            let producto = productos[i];
            indents.push(
                <div className="item-producto" key={i}>
                    <ItemProducto agregarPedido={this.agregarPedido.bind(this)} producto = {producto} productosPedidos={this.state.productosPedidos}/>
                </div>
                );
        }
        return (
            <div className="imagen-fondo-principal container-catalogo-productos">
                <MenuOpciones cantidadPedidos={Utilidades.productosPedidos.length} />
                <div className="panel-catalogo-productos panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">Catálogo de productos</span>
                    <div className="formulario-buscar navbar-right">
                        <label htmlFor="buscador">¿Que estas buscando?</label>
                        <input type="text" value={this.state.patronBusqueda} onChange={this.busquedaProductos.bind(this)}/>
                    </div>
                    </div>
                    <div className="panel-body">
                        {indents}
                    </div>
                </div>
            </div>
        );
    }
    /**
     * Se agrega los productos como pedidos.
     * @param {*} producto 
     */
    agregarPedido(producto){
        console.log(Utilidades.productosPedidos.length);
        console.log(producto);
        let indexPedido = -1;
        for (var index = 0; index < Utilidades.productosPedidos.length; index++) {
            var element = Utilidades.productosPedidos[index];
            if(element.id === producto.id){
                indexPedido = index;
                break;
            }
        }
        if(indexPedido != -1){
            Utilidades.productosPedidos[indexPedido].cantidadAComprar += producto.cantidadAComprar;
        }else{
            Utilidades.productosPedidos.push(producto);
        }
        this.setState({
            productosPedidos: Utilidades.productosPedidosAux
        });
    }
    /**
     * Metodo ejecutado en el onChange del campo de consulta. Consulta los productos relacionados con el patron.
     * @param {*} event 
     */
    busquedaProductos(event) {
        let patronEscrito = event.target.value;
        this.setState({patronBusqueda: event.target.value});
        let productos = this.state.productos;
        let productosConsulta = [];
        for (var index = 0; index < productos.length; index++) {
            var element = productos[index];
            if(element.nombre.includes(patronEscrito)){
                productosConsulta.push(element);
            }
        }
        this.setState({productosConsulta: productosConsulta});
    }
    /**
     * Consultar los productos existentes
     */
    getProductos(){
        request
            .get('https://tienda-9303e.firebaseio.com/productos.json')
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                console.log(res.body);
                let productosRecuperados = res.body;
                request
                    .get('https://tienda-9303e.firebaseio.com/pedidos.json')
                    .set('Content-Type', 'application/json')
                    .end((errPedido, resPedido) => {
                        console.log(resPedido.body);
                        let pedidosRecuperados = resPedido.body;
                        for (var index = 0; index < productosRecuperados.length; index++) {
                            var element = productosRecuperados[index];
                            for (var indexUtil = 0; indexUtil < Utilidades.productosPedidos.length; indexUtil++) {
                                var elementUtil = Utilidades.productosPedidos[indexUtil];
                                if(element.id == elementUtil.id){
                                    productosRecuperados[index].unidadesDisponibles -= elementUtil.cantidadAComprar;
                                }
                            }
                            for (let key in pedidosRecuperados) {
                                var pedido = pedidosRecuperados[key];
                                if(element.id == pedido.id){
                                    productosRecuperados[index].unidadesDisponibles -= pedido.cantidadAComprar;
                                }
                            }
                        }
                        this.setState({
                            productos: productosRecuperados,
                            productosConsulta: productosRecuperados
                        });
                    });
            });
    }
}

export default Catalogo;