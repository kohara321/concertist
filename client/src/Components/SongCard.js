import "./songCard.css";
import { useHistory } from "react-router-dom";

function SongCard({pieces}){

    let history = useHistory()
    function nav(e){
        let selectedCard = e.target.parentNode
        let workTitle = selectedCard.querySelector('#work-title').textContent
        window.localStorage.setItem("SELECTED_WORK", workTitle)
        history.push('/performances')
    }

    return(
        <div id="song-card">
            <h1 id="composer-name">{pieces.composer.complete_name}</h1>
            <h1 id="work-title">{pieces.work.title}</h1>
            <h2 id="work-info">{pieces.composer.epoch +" - "+ pieces.work.genre}</h2>
            <button id="work-btn" onClick={nav} >Performances</button>
            <br/>
            <img id="work-img" src={pieces.composer.portrait} alt={pieces.composer.complete_name + "image"} />
        </div>
    )
}

export default SongCard;