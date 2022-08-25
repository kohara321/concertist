

function PostsCard({titles, descriptions, sources, comments}) {
    console.log(titles)
    return(
        <div>
            {/* <h2>{titles}</h2> */}
            {titles.map(ele => {
                return(
                    <h2 key={ele.id}>{ele}</h2>
                )
            })}
            {/* <p>{descriptions}</p> */}
            {descriptions.map(ele => {
                return(
                    <p key={ele.id}>{ele}</p>
                )
            })}
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${sources}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            {sources.map(ele => {
                return(
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${ele}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
            })}
            <h3>Comments: </h3>
            <ul>{comments}</ul>
        </div>
    )
}

export default PostsCard;