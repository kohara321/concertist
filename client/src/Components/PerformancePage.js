import { useState } from "react";
import { useHistory } from "react-router-dom";

function PerformancePage(){
    const [workTitle, setWorkTitle] = useState(window.localStorage.getItem("SELECTED_WORK"))
    
    let history = useHistory()
    function nav(){
        history.push("/new_post")
    }

    return(
        <div id="performances">
            <h1 id="performance-piece">{workTitle}</h1>
            <button id="add-btn" onClick={nav}>New Performance</button>
        </div>
    )
}

export default PerformancePage;