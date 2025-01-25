import React from 'react';
import ReactDOM from 'react-dom/client'; //VDOM
import App from './App';
import Example from './Example';
import ItemManager from './ItemManager';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ItemManager/>
  </React.StrictMode>
);

//npm start is the command to start the appp=