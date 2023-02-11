import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main.js';
import Library from './components/Library.js';
import { Routes, Route } from 'react-router-dom';
//importing firebase modules:
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
import firebase from './firebase';
import Swal from 'sweetalert2';

function App() {
  // create state to hold user input when they switch between dropdown options (number of lines of poetry), and to hold the poem the user creates and its authors:
  const [userChoice, setUserChoice] = useState("");
  const [poem, setPoem] = useState([]);
  const [authors, setAuthor] = useState([]);
  //creating state for loading icon
  const [loading, setLoading] = useState(false);
  // create state for library (saved poems)
  const [libraryPoems, setLibraryPoems] = useState([]);

  // create a function that will get the user's choice from the dropdown menu and prevent default browser refresh behaviour:
  const chooseNumber = (e) => {
    e.preventDefault();
  }

  // function to call the API and parse data on submit
  const submitHandler = (e) => {
    chooseNumber(e, userChoice)
    setLoading(true)
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

        // mapping through json results to get one line from every returned set of lines. if a line is an empty string, it will go to the next line :
        const poem = resArray.map((returnedPoem) => {
          const lines = returnedPoem.lines.slice(3).find(line => line !== "");
          return lines
        });
        //mapping through json results to get the names of the authors of the lines of poetry:
        const authors = resArray.map((returnedPoem) => {
          const author = returnedPoem.author;
          return author;
        })
        // putting the created poem and author names into state:
        setLoading(false)
        setPoem(poem);
        setAuthor(authors);
      });
  }
  // creating the function to pass to the onChange eventlistener through props:
  const handleChange = (e) => {
    //get user input into state:
    setUserChoice(e.target.value)
  }

  // function to store poems in library
  useEffect(() => {
    // create a variable to hold our firebase details
    const database = getDatabase(firebase);

    // create a variable that makes reference to our database
    const dbRef = ref(database);

    // add an event listener to that variable that will fire from the database; call that data 'response':
    onValue(dbRef, (response) => {
      // creating a variable to store the new state:
      const newState = [];
      // storing the response from our query to Firebase inside a variable, using firebase's .val() method to parse our database the way we want it:
      const data = response.val();


      for (let key in data) {
        // inside the loop, we push each poem to an array we've already created inside the onValue() function called newState:
        newState.push({ key: key, name: data[key] });
      }
      // then, call setBooks in order to update state using the local array newState
      setLibraryPoems(newState);
    })
  }, [])

  // function to push a poem to the library upon submitting the library form:
  const librarySubmit = (e) => {
    e.preventDefault();
    // usual firebase business
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, poem);
    if (poem.length === 0) {
      Swal.fire({
        text: 'Please create a poem first',
        confirmButtonColor: '#f08080',
      });
    } else {
      Swal.fire({
        text: 'Poem saved',
        confirmButtonColor: '#f08080',
      });
    }
  }

  // function to remove poem from library
  const handleRemovePoem = (poemId) => {
    // referencing database again, this time specifically the node of the poem we want to remove:
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${poemId}`);

    remove(dbRef);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main
          chooseNumber={chooseNumber}
          handleChange={handleChange}
          submitHandler={submitHandler}
          poem={poem}
          loading={loading}
          authors={authors}
          librarySubmit={librarySubmit}
        />}
        />
        <Route path="/library" element={<Library
          libraryPoems={libraryPoems}
          handleRemovePoem={handleRemovePoem}
        />}
        />
      </Routes>
    </div >
  );
}

export default App;
