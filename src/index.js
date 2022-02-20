
import reportWebVitals from './reportWebVitals';
import { store } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './Components/App/App';

let renderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderDOM();

store.subscribe(renderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
