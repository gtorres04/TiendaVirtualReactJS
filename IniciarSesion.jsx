import React from 'react';

class IniciarSesion extends React.Component {
    render(){
        return (
            <div className="container-login">
                <div className="form-login">
                    <h1>Inicia Sesión</h1>
                    <form>
                        <div className="campo-formulario">
                            <label htmlFor="correo-input">Correo electrónico *</label>
                            <input type="text" id="correo-input" name="correo-input" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/>
                            <span>Error: campo requerido o error en correo</span>
                        </div>
                        <div className="campo-formulario">
                            <label htmlFor="contrasena-input">Contraseña *</label>
                            <input type="password" id="contrasena-input" name="contrasena-input" required />
                            <span >Error: campo requerido</span>
                        </div>
                        <span className="msn-error">Error</span>
                        <button className="btn btn-success" type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default IniciarSesion;