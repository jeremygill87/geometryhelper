import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import InputPage from './components/inputpage';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='*' component={Header}/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/input' component={InputPage}/>
          <Route path='*' component={Footer}/>
        </div>
      </Router>
    )
  }
}

export default App;