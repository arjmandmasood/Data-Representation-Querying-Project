import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Read} from './components/read';
import { Add } from './components/add';
// import { Update } from './components/update';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Update } from './components/update';

class App extends React.Component {
  render() {
    return (
      <Router>   
      <img src="img/logo.png" alt="" id="logo"></img>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          {/* <Container> */}

            {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
            <Nav className="container-fluid justify-content-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read/Update/Delete</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          {/* </Container> */}
        </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
      </Routes>
        {/* <Header></Header>
        <Content></Content> */}
        <Footer></Footer>
      </div>
      </Router>
    );
  }
}

export default App;
