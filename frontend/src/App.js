import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyModal from './components/MyModal.js';
import ReadMariposas from './components/mariposas/ReadMariposas.js';
import ReadJaulas from './components/jaulas/ReadJaulas.js';
import ReadAlimentacion from './components/alimentacion/ReadAlimentacion.js';
import ReadVisitantes from './components/visitantes/ReadVisitantes.js'
import ReadObservaciones from './components/observaciones/ReadObservaciones.js';
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
        <Route path="/jaulas" component={ReadJaulas} />
        <Route path="/alimentacion" component={ReadAlimentacion} />
        <Route path="/visitantes" component={ReadVisitantes} />
        <Route path="/observaciones" component={ReadObservaciones} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
