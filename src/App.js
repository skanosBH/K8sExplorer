import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Sections/Home';
import Introduction from './Sections/Introduction';
import Architecture from './Sections/Architecture';
import Cluster from './Sections/Cluster';
import Pod from './Sections/Pod';
import Service from './Sections/Service';
import Deployment from './Sections/Deployment';

import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">ICWA Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/introduction">Introduction </Nav.Link>
            <Nav.Link as={Link} to="/architecture">Architecture</Nav.Link>
            <Nav.Link as={Link} to="/cluster">Cluster</Nav.Link>
            <Nav.Link as={Link} to="/pod">Pod</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/deployment">Deployment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function PageHeader() {
  const location = useLocation();
  const getPageTitle = (path) => {
    switch(path) {
      case '/':
        return 'ICWA Project';
      case '/introduction':
        return 'Kubernetes Introduction';
      case '/architecture':
        return 'Kubernetes Architecture';
      case '/cluster':
        return 'Kubernetes Cluster';
      case '/pod':
        return 'Kubernetes Pod';
      case '/service':
        return 'Kubernetes Service';
      case '/deployment':
        return 'Kubernetes Deployment';
      default:
        return 'About Kubernetes';
    }
  }
  const title = getPageTitle(location.pathname);
  return (
    <header className="App-header">
      <h1>{title}</h1>
      <NavBar />
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/architecture' element={<Architecture />} />
          <Route path='/cluster' element={<Cluster />} />
          <Route path='/pod' element={<Pod />} />
          <Route path='/service' element={<Service />} />
          <Route path='/deployment' element={<Deployment />} />
        </Routes>
        <footer className="App-footer">
          &copy; {new Date().getFullYear()} University of Stuttgart. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
