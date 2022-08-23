import PerformCard from "./PerformCard";

function PerformanceDetails({works, userId, allComments}){
    const workInfo = works.map(work => {
        return(
            <PerformCard 
                key = {work.id}
                work = {work}
                userId = {userId}
                allComments={allComments}
            />
        )
    })

    return(
        <div>
            {workInfo}
        </div>
    )
}

export default PerformanceDetails;