
import { useState } from 'react';
import './App.css';
import ArticleList from './Components/ArticleList';
import Naviagtion from './Components/Naviagtion';
import {Routes,Route} from "react-router-dom"
import Contact from './Components/Contact';
import StripePayment from './Components/Payment';
import Success from './Components/Success';
import Cancel from './Components/Cancel';
function App() {
  const [search,setSearch]=useState('')
  return (
    <div className="App">
    <Naviagtion setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<ArticleList search={search}/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/payment' element ={<StripePayment/>}/>
      <Route path='/success' element ={<Success/>}/>
      <Route path='cancel' element ={<Cancel/>}/>
    </Routes>
    </div>
  );
}

export default App;
