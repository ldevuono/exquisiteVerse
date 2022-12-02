// form for user to select how many lines they want their poem to be
const Form = (props) => {

    return (
        <form onSubmit={props.submitHandler}>
            <label htmlFor="lineNumber">How many lines do you want your poem to be?</label>
            <select
                id="lineNumber"
                name="lineNumber"
                onChange={props.handleChange}
                value={props.userChoice}
            >
                <option value="" disabled >Pick one:</option>
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