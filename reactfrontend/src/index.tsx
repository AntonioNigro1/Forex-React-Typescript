import './index.css';

import Topmenu from '../components/Menu';

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Topmenu />
  </React.StrictMode>
);

