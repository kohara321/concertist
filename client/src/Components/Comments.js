import { useState } from "react"
import CommentCard from "./CommentCard";

function Comments({work, userId, allComments}){
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])

    // console.log(userId.id)
    function handleSubmit(e){
        e.preventDefault();
        const data = {
            account_id: userId.id,
            performance_id: work.id,
            comment: comment
        };
        fetch("/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => {
            if (res.ok) {
              res.json()
              .then(data => console.log("comment posted", data))
            } else {
              res.json()
              .then((errorData) => setErrors(errorData.error));
            }
        })
        // .then(res => res.json())
        // .then(data => console.log("comment posted", data))
        setComment("")
    }

    let commentInfo = allComments.map(item => {
        return(
            <CommentCard 
            key={item.id}
            perfComments={item}
            work={work}
            />
        )
    })
    // console.log(commentInfo)
    console.log("comment", errors)

    return(
        <div>
            <h1 id="comment-header">Comments:</h1>
            <form onSubmit={handleSubmit}>
                <div id="comment-input">
                    <input type="text" placeholder="Leave a comment" value={comment} onChange={e => setComment(e.target.value)} />
                </div>
                <div id="comment-btn">
                    <button type="submit">Submit</button>
                </div>
                <div id="comments">
                </div>
            </form>
            <ul>{commentInfo}</ul>
        </div>
    )
}

export default Comments;