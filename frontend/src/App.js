
import { useState } from 'react';
import './App.css';
import ArticleList from './Components/ArticleList';
import Naviagtion from './Components/Naviagtion';
import {Routes,Route} from "react-router-dom"
import Contact from './Components/Contact';
function App() {
  const [search,setSearch]=useState('')
  return (
    <div className="App">
    <Naviagtion setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<ArticleList search={search}/>}/>
      <Route path='/contact' element ={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
