// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// components
import PrivateRoute from '../components/privateRoute';

// containers
import LoginPage from '../containers/LoginPage';
import HomePage from '../containers/HomePage';
import { RegisterPage } from '../containers/RegisterPage';



const ConnectedSwitch = connect()(Switch);



const Router = () => (
  <div className="App">
    <ConnectedSwitch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </ConnectedSwitch>
  </div>
);

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

const RouterContainer = withRouter(Router);

export default RouterContainer;