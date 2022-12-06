import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';
import { BootBar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';

import './App.css'

const App = () => {
  return (

   <div className="app">
    
       <div className="main">
        
           <Container >
               <div className="routes">
                   <Routes>
                       <Route path="/" element={<Homepage/>}>    
                       </Route>
                       <Route path="/cryptocurrencies" element = {<Cryptocurrencies/>}>   
                       </Route>
                       <Route path="/crypto/:coinId" element={<CryptoDetails/>}>   
                       </Route>
                       <Route path="/news" element={<News/>}>   
                       </Route>
                   </Routes>
               </div>
               
           </Container>
           
       </div>
       
  </div>
  )
};

export default App;
