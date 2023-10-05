import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyModal from './components/MyModal.js';
import ReadMariposas from './components/ReadMariposas.js';
import HomePage from './components/HomePage.js'
import Footer from './components/MyFooter.js';
import MyNavbar from './components/MyNavbar.js';

function App() {
  return (
    <Router>
    <MyNavbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/modal" component={MyModal} />
        <Route path="/mariposas" component={ReadMariposas} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
