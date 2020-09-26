import React from 'react';
import './App.css';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Rodape from './Componentes/Rodape'
import Home from './Componentes/Home'
import ListaVacinacao from './Componentes/ListaVacinacao'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUpdateVacinacao from './Componentes/CreateUpdateVacinacao';


function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacao />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/vacinacoes" component={ListaVacinacao}></Route>         
          <Route path="/vacinacao/:id" component={CreateUpdateVacinacao}></Route>
        </Switch>  
        <Rodape/>
      </Router>  
    </div>
  );
}

export default App;
