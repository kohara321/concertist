import './app.css'
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Search from "./Search"
import Posts from "./Posts"
import LoginPage from "./LoginPage"
import CreateUser from "./CreateUser";
import SongDetails from './SongDetails';
import jwt_decode from "jwt-decode"

function App() {
  const [searchTerm, setSearchTerm] = useState("mozart")
  const [searchInput, setSearchInput] = useState("")
  const [songs, setSongs] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    let account = window.localStorage.getItem("USER_OBJ")
    setUser(JSON.parse(account))
  }, [])

  let history = useHistory();
  function handleCallbackResponse(response) {
      var userObject = jwt_decode(response.credential);
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true
      window.localStorage.setItem("USER_OBJ", JSON.stringify(userObject))
      history.push('/search')
    }

    console.log(user)
  
    function handleSignOut(e){
      window.localStorage.setItem("USER_OBJ", JSON.stringify({}))
      setUser({})
      document.getElementById("signInDiv").hidden = false
    }

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
      {user && 
        <h2>{user.name}</h2>
      }
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/search">
          <Search searchSubmit={searchSubmit} handleChange={handleChange} songs={songs} />
          <SongDetails songs={songs} />
        </Route>
        <Route path="/my_posts">
          <Posts />
        </Route>
        <Route path="/login">
          <LoginPage handleCallbackResponse={handleCallbackResponse} handleSignOut={handleSignOut} user={user} setUser={setUser} />
        </Route>
        <Route path="/new_user">
          <CreateUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;