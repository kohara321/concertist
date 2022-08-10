import { gapi } from 'gapi-script';
import './app.css'
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Search from "./Search"
import Posts from "./Posts"
import LoginPage from "./LoginPage"
import CreateUser from "./CreateUser";
import SongDetails from './SongDetails';

const clientId = "642741965839-n4f0rl2hcrfgg1fg15ea75q3f2cdgek7.apps.googleusercontent.com"

function App() {
  const [searchTerm, setSearchTerm] = useState("mozart")
  const [searchInput, setSearchInput] = useState("")
  const [songs, setSongs] = useState([])

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  useEffect(() =>{
    fetch(`https://api.openopus.org/omnisearch/${searchTerm}/0.json`)
    .then(res => res.json())
    .then((data) => setSongs(data.results.slice(1)))
  }, [searchTerm])

  function handleChange(input){
    setSearchInput(input)
   }
 
   const searchSubmit = (e) =>{
     e.preventDefault()
     setSearchTerm(searchInput)
   }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search searchSubmit={searchSubmit} handleChange={handleChange} songs={songs} />
          <SongDetails songs={songs} />
        </Route>
        <Route path="/my_posts">
          <Posts />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/new_user">
          <CreateUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;