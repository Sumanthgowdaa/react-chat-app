import './index.css';
import "./style.scss"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-toastify/dist/ReactToastify.css"

import App from './App';
import AuthProvider from './Context/AuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import AuthProvider from './Context/AuthContext';
import ChatProvider from './Context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App/>
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
