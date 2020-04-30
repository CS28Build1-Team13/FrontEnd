import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import WorldMap from './components/WorldMap'
import PrivateRoute from './utilities/privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      < img src = '/header.png' />
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <PrivateRoute exact path='/world-map' component={WorldMap}/>
      </div>
    </Router>
  );
};

export default App;
