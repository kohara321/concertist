import Comments from "./Comments";
import './performCard.css';

function PerformCard({work, userId, allComments}){

    function handleDelete(){
        fetch(`/performances/${work.id}`, {
            method: "DELETE"
        })
            .then(() => console.log("deleted performance"))
    }

    return(
        <div id="perf-card">
            <iframe width="700" height="375" src={`https://www.youtube.com/embed/${work.performance_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen id="perf-video"></iframe>
            <h1 id="perf-title">{work.workTitle}</h1>
            <p id="perf-description">{work.description}</p>
            <button id="delete-btn" onClick={handleDelete}>Delete Performance</button>
            <div id="comments-box">
                <Comments work={work} userId={userId} allComments={allComments} />
            </div>
        </div>
    )
}

export default PerformCard;