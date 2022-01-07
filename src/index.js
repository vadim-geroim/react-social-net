import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const postMessages = [
  { id: 1, data: "Hello my friend!" },
  { id: 2, data: "What's going on?" },
  { id: 3, data: "How was your trip to Europe? " }
]

const dialogList = [
  { id: 1, name: "Super User" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
  { id: 4, name: "User 4" },
]

const messageList = [
  { id: 1, data: "Hello world." },
  { id: 2, data: "What is going on? " },
  { id: 3, data: "I'm so happy to see you!" }
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postMessages={postMessages} dialogList={dialogList} messageList={messageList} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
