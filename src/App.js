import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'



import './App.scss';

import Navbar from './components/Navbar'
import About from './components/About'
import ContactForm from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/projects'
import Footer from './components/Footer'

function App() {
  return (

    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />

        <Route path="/contact" component={ContactForm} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />

        <Footer />
      </div>
    </BrowserRouter>



  );
}

export default App;
