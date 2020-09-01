import React from 'react';
import { render } from 'react-dom';

//importamos el COMPONENTE ROUTER -> usará el resto de componentes 
// -> en el index.js no trabajamos directamente con App.js o StorePicker.js, etc.
import Router from './components/Router';

//importamos CSS para todo el proyecto. create-react maneja el webpack por debajo.
//importando aqui hacemos que WEBPACK lo gestione y que cualquier cambio al CSS 
//lo actualice
import './css/style.css';


//metodo del react-dom -> aqui montamos el componente en el HTML
//render(<StorePicker />, document.querySelector('#main'));
render(<Router />, document.querySelector('#main'));
