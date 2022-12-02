import { useState } from 'react';
import axios from 'axios';
import Form from './Form.js'
import './App.css';
import './Setup.css';
import DisplayPoem from './DisplayPoem'
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
        // mapping through json results to get the second line of every returned set of lines
        const poem = resArray.map((line) => {
          let lines = (line.lines[1] + "  /  ");
          let author = line.author
          //TODO: get author info on page
          console.log(author)
          return lines
        })
        // putting the created poem into state:
        setPoem(poem);
      })
  };


  // TODO:  filter through array for lines that are not empty strings??
  // const poem = resArray.filter((line) => {
  //     return line.lines[1] != ""; ??????

  // creating the function to pass to the onChange eventlistener through props:
  const handleChange = (e) => {
    //get user input into state:
    setUserChoice(e.target.value)
  }

  return (
    <div className="App">
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
  );
}

export default App;
