import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logo from './assets/traiheadLogo.svg';
import HomeContainer from './containers/HomeContainer'
import EditTrialsContainer from './containers/EditTrialsContainer'
import thunk from 'redux-thunk';
import reducers from './reducers';


let store = createStore(
    reducers,
    applyMiddleware(
        thunk
      )
    )



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
              <Route path='/home' component={HomeContainer}/>
              <Route path='/trails' component={EditTrialsContainer}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
