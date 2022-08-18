import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="linksConteiner">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/About">About</Link>
          <Link className="links" to="/Projects">Projects</Link>
          <Link className="links" to="/Contact">Contact</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/About" component={ About } />
        <Route exact path="/Projects" component={ Projects } />
        <Route exact path="/Contact" component={ Contact } />
        <Route path="/" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
