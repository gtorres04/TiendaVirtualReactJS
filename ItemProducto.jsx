import React from 'react';
import * as request from 'superagent';
import MenuOpciones from './MenuOpciones.jsx';
import { Link } from 'react-router-dom';

class ItemProducto extends React.Component {
    constructor() {
      super();
		
      this.state = {
         unidadesDisponible : 0,
         unidadesSolicidad: 0
      }

    }

    render(){
        return (
            <div className="panel-item-producto panel panel-default">
                <div className="panel-body">
                    <img className="imagen-producto" src={"./assets/img/"+this.props.producto.imagen} alt=""/>
                    <h4>{this.props.producto.nombre}</h4>
                    <div>
                        <label htmlFor="">Precio:&nbsp;</label><span>${this.props.producto.precio}</span>
                    </div>
                    <div>
                        <label htmlFor="">Unidades Disponibles:&nbsp;</label><span>{this.state.unidadesDisponible}</span>
                    </div>
                    <div className="controles-item">
                        <Link to='/' className="btn btn-primary">Ver Mas</Link>
                        <Link to='/' className="btn btn-warning">Añadir</Link>
                        <input type="number" name="cantidadAgregar" value={this.state.unidadesSolicidad} onChange={this.calcularUnidadesDisponibles.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

    calcularUnidadesDisponibles(event){
        let cantidadSolicitada = event.target.value;
        let cantidadDisponible = this.props.producto.unidadesDisponibles - cantidadSolicitada;
        this.setState({
            unidadesSolicidad: event.target.value,
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