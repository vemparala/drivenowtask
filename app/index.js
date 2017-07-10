var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;

import App from './containers/App';
import store from './store';
import './index.css';

ReactDOM.render(
      <Provider store={store}>         
        <Router>
            <Route path="/" component={App}/>
        </Router>
      </Provider>     
    , document.getElementById('root'));