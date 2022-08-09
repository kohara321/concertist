import LoginButton from "./LoginBtn";
import LogoutButton from "./logout";
import { gapi } from 'gapi-script';
import './app.css'
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Search from "./Search"
import Posts from "./Posts"
import Login from "./Login"

const clientId = "642741965839-n4f0rl2hcrfgg1fg15ea75q3f2cdgek7.apps.googleusercontent.com"

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/my_posts">
          <Posts />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;