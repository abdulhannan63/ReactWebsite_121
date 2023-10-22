import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footerbar from "./Footerbar";
import {Routes ,Route} from "react-router-dom";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Service' Component={Service}/>
        <Route path='/About' Component={About}/>
        <Route path='/Contact' Component={Contact}/>
      </Routes>
      <Footerbar></Footerbar>
    </>
  )
}

export default App;
