import { useState } from 'react';
import axios from 'axios';
import Form from './Form.js';
import './App.css';
import './Setup.css';
import Footer from './Footer.js';
import DisplayPoem from './DisplayPoem';
function App() {

  // create state to hold user input when they switch between dropdown options (number of lines of poetry), and to hold the poem the user creates
  const [userChoice, setUserChoice] = useState("");
  const [poem, setPoem] = useState([]);


  // create a function that will get the user's choice from the dropdown menu and prevent default browser refresh behaviour:
  const chooseNumber = (e) => {
    e.preventDefault();
  }

  // function to call the API and parse data on submit
  const submitHandler = (e) => {
    chooseNumber(e, userChoice)
    // API call with axios:
    axios({
      url: `https://poetrydb.org/random/${userChoice}/lines,author`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json"
      },
    })
      .then((res) => {
        const resArray = res.data;
        // console.log(resArray)

        // mapping through json results to get the second line of every returned set of lines
        const poem = resArray.map((returnedPoem) => {
          const lines = (returnedPoem.lines[1] + "  /  ");
          const author = returnedPoem.author;
          //TODO: get author info on page
          console.log(author)

          //TODO: testing another map inside
          // const checkLine = lines.map((line) => {
          //   if (line === "  /  ") {
          //     return null
          //   } else {
          //     return line
          //   }
          // });
          return lines
        });

        //TODO: testing filter for empty space handling
        // const poemCopy = [...poem]
        // const filteredPoems = poemCopy.filter((line) => {
        //   return line !== " / " || "" || "  /  ";
        // })

        // putting the created and filtered poem into state:
        setPoem(poem);
      });
  };

  // creating the function to pass to the onChange eventlistener through props:
  const handleChange = (e) => {
    //get user input into state:
    setUserChoice(e.target.value)
  }

  return (
    <div className="App">
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
        <main className="wrapper">
          <div className="poemGenerator">
            <Form
              chooseNumber={chooseNumber}
              handleChange={handleChange}
              submitHandler={submitHandler}
            />
            <DisplayPoem
              poem={poem} />
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
