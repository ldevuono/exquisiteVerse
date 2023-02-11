import { Link } from 'react-router-dom';
import Form from './Form.js';
import DisplayPoem from './DisplayPoem.js';
import DisplayAuthors from './DisplayAuthors.js';
import LibraryButton from './LibraryButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function Main(props) {

    return (
        <div>
            <nav>
                <Link to="/library">
                    <div className="goToLibrary">
                        <FontAwesomeIcon icon={faBookmark} size="xl"></FontAwesomeIcon>
                        <p>Library</p>
                    </div></Link>
            </nav>
            <div className="mainContent">
                <header className="wrapper">
                    <h1>Exquisite Verse</h1>
                    <div className="example">
                        <p>O to make the most jubilant poem!</p>
                        <p>The people knelt upon the ground with awe;</p>
                        <p>In my faint eyes, and that my heart beat fast</p>
                        <p>Could kindle raptures so divine</p>
                    </div>
                    <div className="instructions">
                        <p>Recognize this poem? It's an exquisite corpse: comprised of one randomly generated line each from Walt Whitman, Oscar Wilde, Percy Bysshe Shelley, and Anne Brontë.</p>
                        <p>
                            Try making your own! Choose a number of lines, and Exquisite Verse will comb through a database of poetry and create a poem of that length out of randomly generated lines from existing poems. Writing poetry is easy! </p>
                    </div>
                </header>
                <section className="poemGenerator wrapper">
                    <Form
                        chooseNumber={props.chooseNumber}
                        handleChange={props.handleChange}
                        submitHandler={props.submitHandler}
                    />
                    <DisplayPoem
                        poem={props.poem}
                        loading={props.loading} />
                    <DisplayAuthors
                        authors={props.authors} />
                    <LibraryButton
                        librarySubmit={props.librarySubmit}
                    />
                </section>
            </div>
        </div>
    );
}

export default Main;



