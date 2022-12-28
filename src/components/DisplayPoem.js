// function to display the poem on the page
import { BeatLoader } from 'react-spinners';

function DisplayPoem(props) {
    return (
        <section className="poemBox">
            <div className="poem">{props.loading === false ? props.poem.join(" / ")
                :
                <BeatLoader className="spinner" color="#cd5c5c" />}</div>
        </section>
    );
}

export default DisplayPoem;
