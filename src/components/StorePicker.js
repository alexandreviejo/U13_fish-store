import React from 'react';

//cada componente es una clase
class StorePicker extends React.Component {

    //creamos una referencia a un DOM element para poder obtener su valor en REACT
    //usamos una PROPERY (no tiene const ni let ni nada)
    myInput = React.createRef();


    //OPCION plain ES6 para hacer BIND A LOS METODOS:
    constructor() {
        super();
        //AQUI HACEMOS LOS BINDS A LOS METODOS NO HEREDADOS PARA QUE EL THIS ESTE ACCESIBLE
        this.goToStore = this.goToStore.bind(this);

        //*****PROBLEMA: nos podemos encontrar con 500 BINDS en el constructor
        //Tambien podriamos no usar el constructor y declarar la funcion como una
        //"property" con arrow function (que pillan el THIS() del entorno en el cual
        //se han definido):
        // goToStore = (event) => {} 
 
    }
    
    // En JS los prototype methods (metodos de clase) se definen sin el "function"
    // delante. En JS una class también tendria un "constructor() {}""
    // handleClick() {
    //     alert('heyyy');
    // }


    //METODO PROPIO DEL OBJETO (NO HEREDADO DE REACT.COMPONENT) -> SI NO
    //HACEMOS BIND AL OBJETO, NO HAY THIS()
    goToStore(event) {
        //el form no tiene que enviar nada a ningun lado. Si no prevent el Default se reenvia
        //a la misma pagina, la recarga y borra lo pintado por consola.
        event.preventDefault();

        //get the text from the input -> ESTO SE HACE ******SIN TOCAR EL DOM*********
        //nada de querySelectors o similar
        console.log(this.myInput.current.value); 
        const storeName = this.myInput.current.value;

        //change the page to /store/entered-name
        //EL COMPONENTE ES HIJO DEL ROUTER. CON "HISTORY" PODEMOS IR AL ROUTER (padre) y
        //y con el PUSH cambiamos la URL del ROUTER
        //El ROUTER VE QUE LE HAN CAMBIADO LA URL y "REACIONA" RENDERIZANDO LO QUE TOQUE
        this.props.history.push(`/store/${storeName}`);
    }

    //METODO HEREDADO DE REACT COMPONENT -> LLEVA EL BINDING AL OBJETO YA HECHO 
    //-> tenemos this()
    componentDidMount() {
        console.log('Mounted');
        console.log(this); // this se refiere al storePicker
    }


    //cada clase require al menos el metodo RENDER -> what HTML I put on the page
    render() {
        //COMO GENERAMOS EL HTML PARA REACT? sin JSX o con JSX (JavaScript XML):
        
        //SIN -> const myelement = React.createElement('p', { className: 'hey'}, 'I do not use JSX!');
        //Esto es una locura si empezamos a anidar HTML elements.
        
        //CON JSX -> <p className="hey"> I love JSX</p>
        //*** OJO QUE EN HTML NORMAL SE USARIA "class"

        //JSX --> NO SE PUEDEN DEVOLVER SIBLING ELEMENTS. El <p> sibling del form
        //daria error de compilacion al sistema
        //** FROM A RENDER METHOD you can ONLY RETURN ONE ELEMENT
        // HAY QUE ENVOLVERLOS EN UN <React.Fragment></React.Fragment>
        //este tag luego no aparece en los elementos del HTML renderizados
        return (
            //<p> ESTO PETARIA </p>
            <React.Fragment>
                <p>This is a sibling of the FORM. It works due to react.fragment</p>
                <form className="store-selector" onSubmit={this.goToStore}>

                    {/* En JS, hariamos querySelector, pillariamos el DOM element, le
                    meteriamos un addEventListener('click', handleClick).
                    En react lo indicamos en el mismo tag
                    
                    <button onClick={this.handleClick}>Click me!</button>
                    */}

                    {/* comment para JSX. Los {} indica que salimos de JSX y estamos en JS */}
                    <h2>Please enter a store</h2>
                    <input 
                        type="text"
                        ref={this.myInput}
                        required 
                        placeholder="Store name" 
                        defaultValue='fish-store-1'/>
                    <button type="submit">Visit store</button>
                </form> 
            </React.Fragment>
        );
    }
}

export default StorePicker;