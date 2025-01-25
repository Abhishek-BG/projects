import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link,Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <nav>
      <Link to="/" style={{marginLeft:"10px"}}>Home</Link>
      <Link to="/about" style={{marginLeft:"10px"}}>About</Link>
      <Link to="/contact" style={{marginLeft:"10px"}}>Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about/*" element={<About/>} />
      <Route path="/contact"  element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


