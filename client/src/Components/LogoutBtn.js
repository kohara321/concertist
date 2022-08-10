import { GoogleLogout } from "react-google-login";

const clientId = "642741965839-n4f0rl2hcrfgg1fg15ea75q3f2cdgek7.apps.googleusercontent.com"


function LogoutBtn() {

    const onSuccess = () => {
        console.log("Log out successfull!")
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutBtn;