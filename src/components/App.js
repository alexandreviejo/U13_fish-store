import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    
    render() {
        //APARTIR DE EL RETURN EMPIEZA EL JSX (no nos deja ni ; ni JS normal, ni nada.)
        return (
            <div className="catch-of-the-day">
                 <div className="menu">
                    <Header tagline="Seafood Market" age={500}/>
                 </div>
                 <Order />
                 <Inventory />
            </div>    
        );
    }
}

export default App;