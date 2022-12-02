// function to display the poem on the page

function DisplayPoem(props) {
    return (
        <section className="poemBox">
            {/* TODO: if poem contains empty string, insert _______ */}
            {/* else */}
            <div className="poem">{props.poem}</div>
        </section>
    );
}

export default DisplayPoem;