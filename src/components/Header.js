import React from 'react';

//Libreria para el control de los parametros que se le pasan a los componentes
//mediante PROPs-
import PropTypes from 'prop-types';

//******Stateless Functional Component -> componentes que son estaticos, no cambian y
//por lo tanto, no tienen que estado que gestionar. Estas funciones NO TIENEN THIS(), los
//PROPS del padre vienen por parametro

//OPCION 1: function Header(props) {
//OPCION 2:
const Header = (props) => {
    return (
        <header className="top">
            <h1>Fish Store</h1>    
            <h3 className="tagline">
                {/* con {} "modo JS" recuperamos los PROPS que nos ha pasado*/}
                {/* el componente padre. El THIS() solo lo tienen componentes con estado  */}
                {/*<span>{this.props.tagline}</span>  */}
                <span>{props.tagline}</span>
            </h3>
        </header>
    );
};


//VALIDAMOS LOS PARAMETROS QUE SE DEBEN PASAR AL COMPONENTE:
//Si no se pasa "tagline" ->
//Warning: Failed prop type: The prop `tagline` is marked as required in `Header`, 
//but its value is `undefined`.

//***** IMPORTANTE: en un stateless functional component el PROPTYPES se pone despues
//de definir el componente en si (añadimos el objeto como una propiedad del componente)

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;