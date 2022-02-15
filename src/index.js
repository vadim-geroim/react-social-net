
import reportWebVitals from './reportWebVitals';
import state, { addPost, changeTextAreaValue, subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';

let renderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} changeTextAreaValue={changeTextAreaValue} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderDOM();

subscribe(renderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
