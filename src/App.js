import { useState } from 'react';
import axios from 'axios';
import Form from './Form.js'
import './App.css';

function App() {

  // create state to hold user input when they switch between dropdown options (number of lines of poetry), and to hold the poem the user creates
  const [userChoice, setUserChoice] = useState("");
  const [lines, setLines] = useState([]);

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
        resArray.map((line) => {
          let poem = line.lines[1]
          console.log(poem)
          return poem
        })
        // putting the created poem into state:
        setLines(resArray);
      })
  };

  // TODO: figure out how to get "pick one" as default on form


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
      <header>
        <h1>exquisite verse</h1>
        <h2>dev branch</h2>
      </header>
      <Form
        chooseNumber={chooseNumber}
        handleChange={handleChange}
        submitHandler={submitHandler}
      />
    </div>
  );
}



export default App;
