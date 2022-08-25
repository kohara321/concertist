import PerformCard from "./PerformCard"

function Posts({userId}){
    console.log(userId)

    const posts = userId.performances?.map(
        (performance) => {
            return (
                <PerformCard 
                    work={performance}
                    userId={userId}
                    allComments={performance.comments}
                />
            )
        }
    )

    if (!userId.performances) {
        return <h1>Loading Performances...</h1>;
    }

    return(
        <div>
            {posts}
        </div>
    )
}

export default Posts;