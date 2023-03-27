import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Errorpage from './components/Errorpage';
import Landingpage from './components/Landingpage';
import Mynav from './components/Mynav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Mynav></Mynav>
        <Routes>
            <Route path='' element={<Landingpage/>}/>
            <Route path='about' element={<Aboutus/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Routes>
      
      </BrowserRouter>
  </React.StrictMode>
);

