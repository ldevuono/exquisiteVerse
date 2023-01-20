// form for user to select how many lines they want their poem to be
const Form = (props) => {

    return (
        <form onSubmit={props.submitHandler} >
            <label htmlFor="lineNumber">How many lines do you<span> want your poem to be?</span> </label>
            <select
                id="lineNumber"
                name="lineNumber"
                onChange={props.handleChange}
                value={props.userChoice}
                defaultValue={""}
                required={true}
            >
                <option value="" disabled>Pick one:</option>
                <option value="2" required>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div>
                <button type="submit" className="createButton">Create your poem</button>
            </div>
        </form>
    )
};

export default Form;