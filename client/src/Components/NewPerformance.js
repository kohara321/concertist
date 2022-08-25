import { useState } from "react";
import { useHistory } from "react-router-dom";
import './newPerf.css'

function NewPerformance(){
    const [perfURL, setPerfURL] = useState("")
    const [description, setDescription] = useState("")
    const [workTitle, setWorkTitle] = useState(window.localStorage.getItem("SELECTED_WORK"))
    const [errors, setErrors] = useState([])

    let history = useHistory()
    function handleSubmit(e){
        e.preventDefault();
        fetch(`/performances`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                performance: {
                    performance_url: perfURL,
                    description: description,
                    workTitle: workTitle
                }
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
        history.push("/posts")
    }
    console.log(errors)

    return(
        <div>
            <form id="newPerf-form" onSubmit={handleSubmit}>
            <h1 id="newPerf-header">New Performance for {workTitle}</h1>
            <div className="form-group">
                <input type="text" id="newPerf-URL" placeholder="Performance URL endpoint" value={perfURL} onChange={e => setPerfURL(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" id="newPerf-description" placeholder="Add description" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <ul style={{color: 'red'}}>{errors}</ul>
            <div id="newPerf-btns">
                <button type="submit" id="newPerf-btn">Post Performance</button>
            </div>
            </form>
        </div>
    )
}

export default NewPerformance;