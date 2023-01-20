// library section
import { Link } from 'react-router-dom';

const Library = (props) => {
    return (
        <div>
            <Link to="/"><p>Go Back</p></Link>
            <h1 className="libraryh1">Poem Library</h1>
            <div className="library">
                {props.libraryPoems.map((libraryPoem) => {
                    return (
                        <div key={libraryPoem.key}>
                            <li>
                                <p>
                                    {libraryPoem.name.join(" / ")}
                                </p>
                                <p>
                                </p>
                                <button onClick={() => { props.handleRemovePoem(libraryPoem.key) }}>Remove poem</button>
                            </li>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


export default Library;