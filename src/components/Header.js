import { Link } from 'react-router-dom';
import Form from './Form.js';
import DisplayPoem from './DisplayPoem.js';
import DisplayAuthors from './DisplayAuthors.js';
import LibraryButton from './LibraryButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

function Header(props) {

    return (
        <div>
            <nav>
                <Link to="/library">
                    <div className="goToLibrary">
                        <FontAwesomeIcon icon={faAddressBook} size="xl"></FontAwesomeIcon>
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
                    <div className="instructions wrapper">
                        <p>Recognize this poem? It's an exquisite corpse: comprised of one randomly generated line each from Walt Whitman, Oscar Wilde, Percy Bysshe Shelley, and Anne Brontë.</p>
                        <p>
                            Try making your own! Choose a number of lines, and Exquisite Verse will comb through a database of poetry and create a poem of that length out of randomly generated lines from existing poems. Writing poetry is easy! </p>
                    </div>
                </header>
                <main>
                    <div className="poemGenerator">
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
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Header;



