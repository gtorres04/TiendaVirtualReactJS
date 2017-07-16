import React from 'react';

class IniciarSesion extends React.Component {
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
            <div className="container-login">
                <div className="form-login">
                    <h1>Inicia Sesión</h1>
                    <form id="form-login">
                        <div className="campo-formulario">
                            <label htmlFor="correo-input">Correo electrónico *</label>
                            <input type="text" id="correo-input" name="correo-input" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/>
                            <span className={this.state.mostrarErrorCorreo}>Error: campo requerido o error en correo</span>
                        </div>
                        <div className="campo-formulario">
                            <label htmlFor="contrasena-input">Contraseña *</label>
                            <input type="password" id="contrasena-input" name="contrasena-input" required />
                            <span className={this.state.mostrarErrorContrasena}>Error: campo requerido</span>
                        </div>
                        <span className={this.state.mostrarErrorForm}>{this.state.msnErrorForm}</span>
                        <button className="btn btn-success" type="button" onClick = {this.validarUsuario}>Ingresar</button>
                    </form>
                </div>
            </div>
        );
    }
    /**
     * Valida el usuario del formulario.
     */
    validarUsuario(){
       let formularioLogin = document.getElementById("form-login");
       console.log(formularioLogin.checkValidity());
       let inputCorreo = formularioLogin['correo-input'];
       console.log(inputCorreo.checkValidity());
       console.log(inputCorreo);
    }
}

export default IniciarSesion;