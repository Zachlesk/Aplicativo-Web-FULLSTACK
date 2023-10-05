import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyModal from './components/MyModal.js';
import ReadMariposas from './components/mariposas/ReadMariposas.js';
import HomePage from './components/HomePage.js'
import Footer from './components/MyFooter.js';
import MyNavbar from './components/MyNavbar.js';

/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
 */
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
