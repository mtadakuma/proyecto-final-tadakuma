import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0GfOklo1yCbHse-0z3QhaLqaX7orLTs0",
  authDomain: "proyecto-final-9e047.firebaseapp.com",
  projectId: "proyecto-final-9e047",
  storageBucket: "proyecto-final-9e047.appspot.com",
  messagingSenderId: "400605108630",
  appId: "1:400605108630:web:05d8bd7ab9b21b7cf725b7"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
