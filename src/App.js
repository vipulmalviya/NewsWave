import './App.css';
import React from 'react'
import Navbar from './Componentes/Navbar';
import Newscomonents from './Componentes/Newscomonents';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const app = () => {
  const pageSize = 8;
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Newscomonents key={'business'} pageSize={pageSize} country={'in'} category='business' />} />
          <Route exact path="/Entertainment" element={<Newscomonents key={'entertainment'} pageSize={pageSize} country={'in'} category='entertainment' />} />
          <Route exact path="/General" element={<Newscomonents key={'general'} pageSize={pageSize} country={'in'} category='general' />} />
          <Route exact path="/Health" element={<Newscomonents key={'health'} pageSize={pageSize} country={'in'} category='health' />} />
          <Route exact path="/Science" element={<Newscomonents key={'science'} pageSize={pageSize} country={'in'} category='science' />} />
          <Route exact path="/Technology" element={<Newscomonents key={'technology'} pageSize={pageSize} country={'in'} category='technology' />} />
          <Route exact path="/Sports" element={<Newscomonents key={'sports'} pageSize={pageSize} country={'in'} category='sports' />} />
        </Routes>
      </div>
    </Router>
  )
}


export default app 