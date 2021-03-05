import './App.css';
import React from 'react'
import { Navbar, Home, Detail, Favorites } from './routes'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/detail/:id'>
          <Detail/>
        </Route>
        <Route path='/favorites'>
          <Favorites/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

