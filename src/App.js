import React from 'react';
import './App.css';
import BarraNavegacao from './Components/BarraNavegacao';
import Rodape from './Components/Rodape'
import Home from './Components/Home'
import ListaVacinacao from './Components/ListaVacinacao'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUpdateVacinacao from './Components/CreateUpdateVacinacao';


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
