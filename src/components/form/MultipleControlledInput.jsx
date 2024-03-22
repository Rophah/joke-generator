import { useState } from "react";
const MultipleControlledInput = () => {

    const [person, setPerson] = useState({name:"", job: "", company:"", sex:""});
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPerson({...person, [name]:value});
    }

    const handleButton = (e) => {
        e.preventDefault();
        const newUser = person;

        console.log(newUser);
        setPerson({name:"", job:"", company:"", sex:""})
    }
  return (
    <div>
      <div className="--bg-primary --mh-100vh">
        <h1 className="--text-light --text-center">Multiple Controlled Input</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
                <form className="--form-control">
                    <div className="">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" value= {person.name} onChange={handleChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="job">Job: </label>
                        <input type="text" name="job" value= {person.job} onChange={handleChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="company">Company: </label>
                        <input type="text" name="company" value= {person.company} onChange={handleChange}/>
                    </div>
                    <div className="">
                        <label htmlFor="sex">Sex: </label>
                        <input type="text" name="sex" value= {person.sex} onChange={handleChange}/>
                    </div>

                    <button type="submit" className="--btn --btn-block" onClick={handleButton}>Submit user</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleControlledInput
