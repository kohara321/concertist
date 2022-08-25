import { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";

function Login({handleCallbackResponse, user}){
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    
      useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: "642741965839-n4f0rl2hcrfgg1fg15ea75q3f2cdgek7.apps.googleusercontent.com",
          callback: handleCallbackResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "outline", size: "large" }
        );
      }, [handleCallbackResponse]);

    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
    }

    const nav = () => {
        history.push('/new_user')
    }

    return(
        <>
        <form id="login-form" onSubmit={handleSubmit}>
            <h1 id="login-header">Login to Your Account</h1>
            {/* <div className="form-group">
                <input type="text" id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div id="login-btns">
                <button type="submit" id="login-btn">Login</button>
                <button type="button" id="signup-btn" onClick={nav} >Sign Up</button>
            </div> */}
            <div id="signInDiv"></div>
        {/* {
          Object.keys(user).length !== 0 &&
          <h3>Logged in as:</h3>
        }
        { user &&
        <div>
          <img src={user.picture} alt=""/>
          <h3>{user.name}</h3>
        </div>
        } */}
        </form>
        </>
    )
}

export default Login;