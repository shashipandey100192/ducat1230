import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const First =lazy(()=> import('./lazyprocess/Mylazyhome'));
const Second = lazy(()=> import('./lazyprocess/Myabout'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Routes>
          
            <Route path='' element={
               <Suspense fallback={<h1 style={{color:'red'}}>Loding...</h1>}>
                  <First/>
               </Suspense>
            }>
            </Route>
            <Route path='about' element={
              <Suspense fallback={<h1>Loding...</h1>}>
                    <Second/>
                </Suspense>
            }>
                
            </Route>
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

