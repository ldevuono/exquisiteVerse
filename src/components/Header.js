// header with example and instructions
function Header() {

    return (
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
    );
}

export default Header;



