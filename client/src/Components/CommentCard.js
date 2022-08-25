import './commentCard.css';

function CommentCard({perfComments, work}){
    let perfId = JSON.parse(perfComments.performance_id)
    let comments = perfComments.comment
    return(
        <div id="comments">
        {(() => {
          if (perfId === work.id) {
            return (
              <div>
                <h3 id="comment-name">{perfComments.account.name}</h3>
                <p id="comment-text">{comments}</p>
            </div>
            )
          }})()}
        </div>
    )
}

export default CommentCard;