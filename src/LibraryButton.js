// button to save your poem to firebase
function LibraryButton(props) {

    return (
        <form onSubmit={props.librarySubmit}>
            <label htmlFor="savedPoem" className="sr-only">Save your poem to the library</label>
            <button type="submit" className="libraryButton">Save to library</button>
        </form>
    );
}

export default LibraryButton;