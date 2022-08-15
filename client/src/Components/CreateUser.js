import { useState } from "react";
// import { useHistory } from "react";

function CreateUser(){
    const [email, setEmail] = useState("")
    const [givenName, setGivenName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    // let history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <form id="new-user-form" onSubmit={handleSubmit}>
            <h1 id="new-user-header">Create New Account</h1>
            <div className="form-group">
                <input type="text" id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" id="given-name" placeholder="First Name" value={familyName} onChange={e => setFamilyName(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" id="family-name" placeholder="Last Name" value={givenName} onChange={e => setGivenName(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" id="password-confirmation" placeholder="Confirm Password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
            </div>
            <div id="new-user-btns">
                <button type="submit" id="new-user-btn">Create</button>
            </div>
        </form>
    )
}

export default CreateUser;