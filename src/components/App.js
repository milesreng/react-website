import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  HashRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Coursework from './pages/Coursework';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';

import './App.scss';

class App extends React.Component {
  render () {
    return (
        <Router>
          <Layout />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/coursework" element={<Coursework />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </Router>
      )
  };
}

export default App;
