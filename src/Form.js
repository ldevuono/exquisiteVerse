// import { useState } from 'react';

const Form = () => {

    // const [userChoice, setUserChoice] = useState("");

    const submitHandler = (e) => {
        console.log("you submitted")
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
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
            </select>
            <button type="submit">Make your poem!</button>
        </form>
    )
};

export default Form;