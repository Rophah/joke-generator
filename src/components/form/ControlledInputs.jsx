import { useState } from "react"

const ControlledInputs = () => {
    
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleButton = (e) => {
        e.preventDefault();
        console.log(name, job);
    }
  return (
    <div>
      <div className="--bg-primary --mh-100vh">
        <h1 className="--text-light --text-center">Controlled Input</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
                <form className="--form-control">
                    <div className="">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" value= {name}onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="job">Name: </label>
                        <input type="text" name="job" value= {job} onChange={(e) => setJob(e.target.value)}/>
                    </div>
                    <button type="submit" className="--btn --btn-block" onClick={handleButton}>Submit user</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ControlledInputs
