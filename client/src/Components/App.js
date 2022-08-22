import './app.css'
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Search from "./Search"
import Posts from "./Posts"
import PerformancePage from './PerformancePage';
import NewPerformance from './NewPerformance';
import LoginPage from "./LoginPage"
import CreateUser from "./CreateUser";
import SongDetails from './SongDetails';
import jwt_decode from "jwt-decode"

function App() {
  const [searchTerm, setSearchTerm] = useState("mozart")
  const [searchInput, setSearchInput] = useState("")
  const [songs, setSongs] = useState([])
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let account = window.localStorage.getItem("USER_OBJ")
    let status = window.localStorage.getItem("LOGIN_STATUS")
    setUser(JSON.parse(account))
    setLoggedIn(status)
  }, [])

  let history = useHistory();
  function handleCallbackResponse(response) {
      let userObject = jwt_decode(response.credential);
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true
      window.localStorage.setItem("USER_OBJ", JSON.stringify(userObject))
      window.localStorage.setItem("LOGIN_STATUS", true)
      setLoggedIn(true)
      
      fetch(`/email?email=${userObject.email}`)
      .then(res => res.json())
      .then((data) => {
        if (data === null) {
          let data = {
            email: userObject.email,
            given_name: userObject.given_name,
            family_name: userObject.family_name,
            name: userObject.name,
            picture: userObject.picture,
            password: userObject.email,
          };
          console.log(data);
          fetch("/accounts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            });
        }
      })
      history.push('/search')
    }

    console.log(user)
    // console.log(loggedIn)
  
    function handleSignOut(e){
      window.localStorage.setItem("USER_OBJ", JSON.stringify({}))
      window.localStorage.setItem("LOGIN_STATUS", false)
      setUser({})
      setLoggedIn(false)
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
      <NavBar loggedIn={loggedIn} handleSignOut={handleSignOut} />
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
        <Route path="/performances" >
          <PerformancePage />
        </Route>
        <Route path="/new_post" >
          <NewPerformance />
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