// function to display the authors of your poem on the page

function DisplayAuthors(props) {
    return (
        <section className="authorBox">
            <div className="authors">{props.authors.join(" / ")}</div>
        </section>
    );
}

export default DisplayAuthors;