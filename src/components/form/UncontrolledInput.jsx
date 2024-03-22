import { useRef, useEffect } from "react";
const UncontrolledInput = () => {
    
    const nameInputRef = useRef(null)
    const jobInputRef = useRef(null)

    const handleButton = (e) => {
        e.preventDefault();
        const newName = nameInputRef.current.value;
        const newJob = jobInputRef.current.value; 
        console.log(newName, newJob);
    }

    useEffect(() => {
     jobInputRef.current.focus() ;
    })
    
  return (
    <div>
      <div className="--bg-primary --mh-100vh">
        <h1 className="--text-light --text-center">UnControlled Input</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
                <form className="--form-control">
                    <div className="">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name= "name" ref={nameInputRef} />
                    </div>
                    <div>
                        <label htmlFor="job">Job: </label>
                        <input type="text" name= "job" ref={jobInputRef} />
                    </div>
                    <button type="submit" className="--btn --btn-block" onClick={handleButton}>Submit user</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UncontrolledInput
