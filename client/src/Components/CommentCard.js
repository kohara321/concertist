

function CommentCard({perfComments, work}){
    let perfId = JSON.parse(perfComments.performance_id)
    let comments = perfComments.comment
    // console.log(perfComments)
    return(
        <div>
        {(() => {
          if (perfId === work.id) {
            return (
              <div>
                <h3>{perfComments.account.name}</h3>
                <p>{comments}</p>
                <button>delete</button>
            </div>
            )
          }})()}
        </div>
    )
}

export default CommentCard;