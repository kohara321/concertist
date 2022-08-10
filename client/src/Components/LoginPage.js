import LoginButton from "./LoginBtn";
import LogoutButton from "./LogoutBtn";
import { useState } from "react";
import { useHistory} from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
    }

    const nav = () => {
        history.push('/new_user')
    }

    return(
        <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div id="login-btns">
                <button type="submit" id="login-btn">Login</button>
                <button type="button" id="signup-btn" onClick={nav} >Sign Up</button>
            </div>
            <LoginButton />
            <LogoutButton />
        </form>
    )
}

export default Login;