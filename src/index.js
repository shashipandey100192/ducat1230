import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Axiosapidatalist from './components/Axiosapidatalist';
import Errorpage from './components/Errorpage';
import Landingpage from './components/Landingpage';
import Mygallery from './components/Mydatalist';
import Mynav from './components/Mynav';
import Detailspage  from './components/ProductDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Mynav></Mynav>
        <Routes>
            <Route path='' element={<Landingpage/>}/>
            <Route path='about' element={<Aboutus/>}/>
            <Route path='*' element={<Errorpage/>}/>
            <Route path='datalist' element={<Mygallery/>}/>
            <Route path='apidata' element={<Axiosapidatalist/>}/>
            <Route path='apidata/:id' element={<Detailspage/>}/>
        </Routes>
      
      </BrowserRouter>
  </React.StrictMode>
);

