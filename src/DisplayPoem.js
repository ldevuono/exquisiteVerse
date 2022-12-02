// function to display the poem on the page

function DisplayPoem(props) {
    return (
        <section>
            {/* TODO: if poem contains empty string, insert _______ */}
            {/* else */}
            <div>{props.poem}</div>
        </section>
    );
}

export default DisplayPoem;