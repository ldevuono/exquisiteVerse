import { useState } from 'react';
import axios from 'axios';


const Form = (props) => {

    // create state to hold user input when they switch between dropdown options (number of lines of poetry)
    const [userChoice, setUserChoice] = useState("");
    // const [line, setLine] = useState([]);


    const submitHandler = (e) => {
        props.chooseNumber(e, userChoice)
        // API call with axios:
        axios({
            url: "https://poetrydb.org/random/${userChoice}/lines,author",
            method: "GET",
            dataResponse: "json",
            params: {
                format: "json"
            },
        })
            .then((res) => {
                console.log(res.data)
                // console.log(res.data[0].lines[2])

                // TODO: map through json array based on amount of lines from userInput
                // filter through array for lines that are not empty strings??
                //const poem = res.data.filter()


                //then setLine(poem);
                // setLine(res.data[0].lines[1])
                // TODO: figure out how to loop through the response to get  a certain number of random lines of poetry
            });
    }
    const handleChange = (e) => {
        setUserChoice(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="lineNumber">How many lines long do you want your poem to be?:</label>
            <select
                id="lineNumber"
                name="lineNumber"
                onChange={handleChange}
                value={userChoice}
            >
                <option value="" disabled>Pick one:</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">Make your poem!</button>
        </form>
    )
};

export default Form;