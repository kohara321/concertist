import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewPerformance(){
    const [perfURL, setPerfURL] = useState("")
    const [description, setDescription] = useState("")
    const [workTitle, setWorkTitle] = useState(window.localStorage.getItem("SELECTED_WORK"))
    const [errors, setErrors] = useState([])

    let history = useHistory()
    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3000/performances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                performance_url: perfURL,
                description: description,
                workTitle: workTitle
            }),
        })
        .then(res => {
            if (res.ok) {
              res.json()
              .then(data => console.log(data))
            } else {
              res.json()
              .then((errorData) => setErrors(errorData.error));
            }
        })
        history.push("/performances")
    }

    console.log(errors)

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>New Performance for {workTitle}</h1>
            <div className="form-group">
                <input type="text" id="perf-URL" placeholder="Performance URL" value={perfURL} onChange={e => setPerfURL(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" id="description" placeholder="Add descriptiono" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div id="new-post-btns">
                <button type="submit" id="new-post-btn">Post Performance</button>
            </div>
            </form>
        </div>
    )
}

export default NewPerformance;