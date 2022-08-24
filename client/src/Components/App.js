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
  const [userId, setUserId] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [allComments, setAllComments] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const account = window.localStorage.getItem("USER_OBJ")
    if (account) {
      const status = window.localStorage.getItem("LOGIN_STATUS")
      setUser(JSON.parse(account))
      setLoggedIn(status)
    }
  }, [])

  let history = useHistory();
  function handleCallbackResponse(response) {
      let userObject = jwt_decode(response.credential);
      setUser(userObject)
      window.localStorage.setItem("USER_OBJ", JSON.stringify(userObject))
      document.getElementById("signInDiv").hidden = true
      window.localStorage.setItem("LOGIN_STATUS", true)
      setLoggedIn(true)
      
      fetch(`/email?email=${userObject.email}`)
      .then(res => res.json())
      .then((data) => {
        if (data === null) {
          addUser()
        }
      })
      history.push('/search')
    }
    const addUser = () => {
      let data = {
        email: user.email,
        given_name: user.given_name,
        family_name: user.family_name,
        name: user.name,
        picture: user.picture,
        password: user.email,
      }; 
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

    console.log(user)

    useEffect(() => {
      if (user.email) {
        fetch(`/email?email=${user.email}`)
          .then(res => {
            if (res.ok) {
              res.json()
              .then(data => setUserId(data))
            } else {
              res.json()
              .then((errorData) => setErrors(errorData.error));
            }
          })
      }
    }, [user])
    console.log(errors)
    console.log(userId)

    useEffect(() => {
      fetch("/comments")
      .then(res => res.json())
      .then(data => setAllComments(data))
    }, [])
  
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
     if (searchInput === "" ) {
      setSearchTerm("mozart")
     }
   }

  return (
    <div className="App">
      {/* {user && 
        <h2>{user.name}</h2>
      } */}
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
          <Posts userId={userId} />
        </Route> 
        <Route path="/posts" >
          <PerformancePage userId={userId} allComments={allComments} />
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