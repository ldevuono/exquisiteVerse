// function to display the poem on the page
// import { BeatLoader } from 'react-spinners';
import spinner from '../assets/quill.gif';

function DisplayPoem(props) {
    return (
        <section className="poemBox">
            <div className="poem">{props.loading === false ? props.poem.join(" / ")
                :
                // <BeatLoader className="spinner" color="#cd5c5c" />
                <img className="spinner" src={spinner} alt="quill writing your poem"></img>}
            </div>
        </section>
    );
}

export default DisplayPoem;
