//Component will not load on same page refresh
import { useState, useEffect } from "react"

function Posts({userId}){
    const [perfComments, setPerfComments] = useState([])

    useEffect(() => {
        let performancesArr = userId.performances
        if (performancesArr) {
            fetch(`/performances/${performancesArr.map(performance => performance.id)}`)
                .then(res => res.json())
                .then(data => setPerfComments(data.comments))
        }
    }, [userId.performances])
    console.log(userId)
    console.log(perfComments)


    if (!userId.performances) {
        return <h1>Loading Performances...</h1>;
    }

    return(
        <div>
            <h1>Your Performances</h1>
            <h2>{userId.performances?.map(performance => performance.workTitle)}</h2>
            <p>{userId.performances?.map(performance => performance.description)}</p>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${userId.performances?.map(performance => performance.performance_url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h3>Comments: </h3>
            <ul>{perfComments.map(com => <> {com.comment} <br/> </> )}</ul>
        </div>
    )
}

export default Posts;

// const [perfComments, setPerfComments] = useState([])

// useEffect(() => {
//     const timer = setTimeout(()=>{
//         let performancesArr = userId.performances
//         fetch(`/performances/${performancesArr.map(performance => performance.id)}`)
//         .then(res => res.json())
//         .then(data => setPerfComments(data.comments))
//     }, 300)
//     return () => clearTimeout(timer)
// }, [userId.performances])
// console.log(userId)
// console.log(perfComments)


// if (userId === null) {
//     return <h1>Loading Performances...</h1>;
//   }

// return(
//     <div>
//         <h1>Your Performances</h1>
//         {/* <h2>{userId.performances.map(performance => performance.workTitle)}</h2> */}
//         <h2>{userId.performances[0].workTitle}</h2>
//         {/* <p>{userId.performances.map(performance => performance.description)}</p> */}
//         <p>{userId.performances[0].description}</p>
//         {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${userId.performances.map(performance => performance.performance_url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
//         <iframe width="560" height="315" src={`https://www.youtube.com/embed/${userId.performances[0].performance_url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//         <h3>Comments: </h3>
//         <ul>{perfComments.map(com => <> {com.comment} <br/> </> )}</ul>
//     </div>
// )