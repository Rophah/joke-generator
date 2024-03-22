import { useState, useEffect } from "react";
import spinner from "../assets/spinner1.jpg"
import useFetch from "./useFetch";

const url= "https://api.chucknorris.io/jokes/random";

const Jokes = () => {

  const {joke, isLoading, getJoke} = useFetch(url);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light">
        <h1 className="--text-center">Random Jokes Generator</h1>
        <div className="--line"></div>
        {isLoading ? (<div className="--center-all">
        <img src={spinner} alt="loading" width={100}/>
        </div>) : (<div className="--center-all">
        <h3>Joke id: {joke.id}</h3>
        <p>{joke.value}</p>
        </div>)}    
        
        <br/>
        <button className="--btn --btn-primary --center-all" onClick={getJoke}>Generate Joke</button>
        <br/>
      </div>
    </section>
  );
};

export default Jokes;
