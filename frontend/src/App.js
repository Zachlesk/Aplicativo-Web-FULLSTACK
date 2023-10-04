import ReadMariposas  from './components/ReadMariposas.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

function App() {
  return(
  <>
  <Router> 
    <div className='main'>
      <h2 className='main-header'> Celestialfly </h2>
      {/* <div>
        <Route exact path='/create' component={Create}></Route>
      </div> */}
      <div>
        <Route exact path='/mariposas' component={ReadMariposas}></Route>
      </div>
      {/* <div>
        <Route path='/update' component={Update}></Route>
      </div> */}
    </div>
    </Router>
  </>)
}

export default App