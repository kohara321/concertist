import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PerformanceDetails from "./PerformanceDetails";

function PerformancePage({userId, allComments}){
    const [workTitle, setWorkTitle] = useState(window.localStorage.getItem("SELECTED_WORK"))
    const [workObj, setWorkObj] = useState([])

    useEffect(() => {
        fetch(`/performances`)
        .then(res => res.json())
        .then(data => setWorkObj(data.filter(work => work.workTitle === workTitle)))
    }, [workTitle])

    let history = useHistory()
    function nav(){
        history.push("/new_post")
    }

    return(
        <div id="performances">
            <h1 id="performance-piece">Currently Viewing: {workTitle}</h1>
            <button id="add-btn" onClick={nav}>New Performance</button>
            <PerformanceDetails works={workObj} userId={userId} allComments={allComments} />
        </div>
    )
}

export default PerformancePage;