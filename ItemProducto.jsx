import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';
import { Link } from 'react-router-dom';

class ItemProducto extends React.Component {
    constructor() {
      super();
		
      this.state = {
         unidadesDisponible : 0,
         unidadesSolicitadas: 0
      }

    }

    render(){
        return (
            <div className="panel-item-producto panel panel-default">
                <div className="panel-body">
                    <img className="imagen-producto" src={"./assets/img/"+this.props.producto.imagen} alt=""/>
                    <div>
                        <h4>{this.props.producto.nombre}</h4>
                    </div>
                    <div>
                        <label htmlFor="">Precio:&nbsp;</label><span>${this.props.producto.precio}</span>
                    </div>
                    <div>
                        <label htmlFor="">Unidades Disponibles:&nbsp;</label><span>{this.state.unidadesDisponible}</span>
                    </div>
                    <div className="controles-item">
                        <Link to={`/catalogo/detalle-producto/${this.props.producto.id}`} className="btn btn-primary">Ver Mas</Link>
                        <a onClick={this.agregarPedido.bind(this)} className="btn btn-warning">Añadir</a>
                        <input type="number" name="cantidadAgregar" value={this.state.unidadesSolicitadas} onChange={this.calcularUnidadesDisponibles.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
    agregarPedido(){
        this.props.producto.unidadesDisponibles = this.state.unidadesDisponible;
        this.props.producto.cantidadAComprar = Number.parseInt(this.state.unidadesSolicitadas);
        this.props.agregarPedido(this.props.producto);
        this.setState({
            unidadesSolicitadas: 0
        });
    }
    calcularUnidadesDisponibles(event){
        let cantidadSolicitada = event.target.value;
        let cantidadDisponible = this.props.producto.unidadesDisponibles - cantidadSolicitada;
        this.setState({
            unidadesSolicitadas: event.target.value,
            unidadesDisponible: cantidadDisponible
        });
    }

    componentWillMount(){
        this.setState({
            unidadesDisponible: this.props.producto.unidadesDisponibles
        });
    }
}
export default ItemProducto;