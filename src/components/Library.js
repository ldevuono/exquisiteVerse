// library section
const Library = (props) => {
    return (
        <div>
            <h2>Library</h2>
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