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
import Mybootstrapform from './components/Mybootstrapform';
import Mychart from './components/Mychart';
import Parents from './components/Parents';
import LoginButton from './components/Myloginpage';
import { Auth0Provider } from "@auth0/auth0-react";
import Firstpage from './doutes/Firstpage';
import Reduxlandingpage from './redux/Reduxlandingpage';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="9g8CirzgnelIWvTyd46cL5TrI98DFcme"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BrowserRouter>
      <Mynav></Mynav>
        <Routes>
            {/* <Route path='' element={<Landingpage/>}/> */}
             <Route path='' element={<LoginButton/>}/>
            <Route path='about' element={<Aboutus/>}/>
            <Route path='*' element={<Errorpage/>}/>
            <Route path='datalist' element={<Mygallery/>}/>
            <Route path='apidata' element={<Axiosapidatalist/>}/>
            <Route path='apidata/:id' element={<Detailspage/>}/>
            <Route path="myform" element={<Mybootstrapform/>}/>
            <Route path="mychart" element={<Mychart/>}/>
            <Route path="myprops" element={<Parents/>}/>
            <Route path='mydoute' element={<Firstpage/>}/>
            <Route path='myredux' element={<Reduxlandingpage/>}/>
            
            
        </Routes>
      
      </BrowserRouter>
      </Auth0Provider>
      </Provider>
  </React.StrictMode>
);

