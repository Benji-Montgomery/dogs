import { useState } from "react";

const Dogs = () => {

    const [dogs, setDogs] = useState([])

    function randomize(event) {
        //event.preventDefault()
    
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => {
            console.log(json.message)
            setDogs(json.message)
            console.log('dogs', dogs)
        })
    }

    return (
        <div>
            <h1>Random Cute Doggy:</h1>
            <button onClick={() => randomize()}>random dogo</button>
            <img src={dogs} alt='random doggy' />
        </div>
    );
    };
    
    export default Dogs;