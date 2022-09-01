import './App.css';
import { useState } from 'react';
import Main from './pages/Main';
import Observatorio from './pages/Observatorio';
import Observatorio2 from './pages/Observatorio2';
import Feedback1 from './pages/FeedBack1'
import Feedback2 from './pages/FeedBack2'
import Erro from './pages/Erro';
import Header from './components/Header';
import Footer from './components/Footer/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import ProtectedRouter from './protectedRouter';

function App() {

  return (
    <>
      <div className='App'>  
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='*' element={<Erro />}/>
            <Route path= '/Feedback1' element={<Feedback1/>}/>
            <Route path= '/Feedback2' element={<Feedback2/>}/>
            <Route path= '/Observatorio' element={<Observatorio/>}/>
            <Route path= '/Observatorio/Detalhes' element={<Observatorio2/>}/>
          </Routes>
        <Footer/>  
      </BrowserRouter>
      </div>
    </>
    );
}
  
export default App;
