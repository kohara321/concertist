import PerformCard from "./PerformCard";


function PerformanceDetails({works}){
    const workInfo = works.map(work => {
        return(
            <PerformCard 
                key = {work.id}
                work = {work}
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