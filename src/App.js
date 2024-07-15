// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect } from "react";
import Proj from './components/Proj/Proj';



function App() {

  return (
    <Router>
        <Header/>
      <Routes>
      <Route
              path="/"
              element={
                <Home
                />
              }
            />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Proj/>}/>
            
            <Route path="/contact" element={<Contact />} />
        <Route path="/Account" element={<Login />}/>
                   
      </Routes>
      <Footer/>
      
      

    </Router>
  );
}

export default App;
