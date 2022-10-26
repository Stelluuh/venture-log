import React from 'react';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Home from './Home'
import NewHikeLog from './NewHikeLog';
import './App.css'

function App() {
  return (
   <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/hikelogs/new">
            <NewHikeLog />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
