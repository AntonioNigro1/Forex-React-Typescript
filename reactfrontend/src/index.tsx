import './styles/global-styles.css';

import Menu from './components/Menu';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Register } from './components/Register';
import { Login } from './components/Login';
import Footer from './components/Background'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <Register />
    <Footer />
  </React.StrictMode>
);

