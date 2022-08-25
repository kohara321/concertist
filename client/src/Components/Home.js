import './home.css'
import { useHistory } from "react-router-dom";

function Home({user}){

    let history = useHistory();
    function handleClick(){
        history.push('/search')
    }
    
    return(
        <div id="home-div">
            <h1 id="welcome">{user?.name !== undefined ? "Welcome "+user.name+ " to Concertist" : "Welcome to Concertist"}</h1>
            <img width="650" height="350" src="https://vt-today.com/wp-content/uploads/2019/03/877_Kawai-EX-Concert-Grand-Piano.jpg" alt="concert piano" id="piano-img"/>
            <p id="home-text">Search composers or works using the open opus API, then view or post performances and leave comments.</p>
            <button id="home-btn" onClick={handleClick}>Go to Search</button>
        </div>
    )
}

export default Home;