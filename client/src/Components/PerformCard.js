import Comments from "./Comments";

function PerformCard({work, userId, allComments}){
    return(
        <div>
            <h1>{work.workTitle}</h1>
            <p>{work.description}</p>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${work.performance_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Comments work={work} userId={userId} allComments={allComments} />
        </div>
    )
}

export default PerformCard;