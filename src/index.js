import React from 'react';
import ReactDOM from 'react-dom/client';
import Home, { About1 } from './Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <About1 />
  </React.StrictMode>
);

