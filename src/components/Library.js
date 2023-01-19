// library section
import { Link } from 'react-router-dom';

const Library = (props) => {
    return (
        <div>
            <Link to="/"><p>Go Back</p></Link>
            <h2>Poem Library</h2>
            {props.libraryPoems.map((libraryPoem) => {
                return (
                    <div key={libraryPoem.key}>
                        <li>
                            <p>
                                {libraryPoem.name.join(" / ")}
                            </p>
                            <button onClick={() => { props.handleRemovePoem(libraryPoem.key) }}>Remove poem</button>
                        </li>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Library;