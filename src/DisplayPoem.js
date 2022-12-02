// function to display the poem on the page

function DisplayPoem(props) {
    return (
        <section className="poemBox">
            <div className="poem">{props.poem}</div>
        </section>
    );
}

export default DisplayPoem;