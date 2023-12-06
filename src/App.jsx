

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Carousel from "./components/carousel";

export default class App extends Component {
  render() {
    return (
      <>
      
     <BrowserRouter>
    <Navbar/>
    <Carousel/>
    <Routes>
       
    
      <Route exact path='/about'  element={<About/>} />
      <Route exact path='/home'  element={<News/>} />
      <Route exact path='*'  element={<NoPage/>} />
    </Routes>
    </BrowserRouter>
  
    
      
      </>
    );
  }
}
