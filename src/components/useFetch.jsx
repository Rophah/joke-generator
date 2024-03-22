import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [joke, setJoke] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    const getJoke = () => {
      setIsLoading(true);
      fetch(url)
        .then((response) =>{
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setJoke(data);
          setIsLoading(false);
        });
    }
  
    useEffect(() => {
      getJoke();
    }, [url]);

    return {joke, isLoading, getJoke}
}

export default useFetch