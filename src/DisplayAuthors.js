// function to display the authors of your poem on the page

function DisplayAuthors(props) {
    return (
        <section className="authorBox">
            <div className="authors">Lines taken from poems by: <span>{props.authors}</span></div>
        </section>
    );
}

export default DisplayAuthors;