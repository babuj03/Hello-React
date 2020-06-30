import React, { Component } from "react";
import "./App.css";
import "./Persons/person/Person";
import Person from "./Persons/person/Person";
import UserManagement from './containers/UserManagement'
import { Switch, Route } from 'react-router-dom';
import { User } from './components/users/User'

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={UserManagement} exact />
              <Route path="/user/:id" component={User} />
              
          </Switch>
      </main>
  )
}


export default App;
