import { GoogleLogin } from 'react-google-login';

const clientId = "642741965839-n4f0rl2hcrfgg1fg15ea75q3f2cdgek7.apps.googleusercontent.com";

function LoginBtn(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }
    
    const onFailure = (res) => {
        console.log("LOGIN FAILED! red: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginBtn;