// form for user to select how many lines they want their poem to be
const Form = (props) => {

    return (
        <form onSubmit={props.submitHandler} className="wrapper">
            <label htmlFor="lineNumber">How many lines do you want your poem to be?</label>
            <select
                id="lineNumber"
                name="lineNumber"
                onChange={props.handleChange}
                value={props.userChoice}
                defaultValue={"default"}
            >
                <option value="default" disabled >Pick one:</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div className="button">
                <button type="submit">Create your poem</button>
            </div>
        </form>
    )
};

export default Form;