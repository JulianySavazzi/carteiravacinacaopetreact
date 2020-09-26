import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//para usar vários componentes dentro do React.StrictMode
//é preciso colocar os componentes dentro de uma tag de divisão
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
