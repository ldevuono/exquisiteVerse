import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //first create our states:

  // const [line, setLine] = useState([]);

  //call useEffect with an empty dependency array so it executes its callback on component mount and not again TODO: figure out which dependency array i really need here...
  useEffect(() => {

    // API call with axios:
    axios({
      url: "https://poetrydb.org/random/3/lines,author",
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json"
      },
    })
      .then((res) => {
        console.log(res.data)
        // console.log(res.data[0].lines[1])
        // setLine(res.data[0].lines[1])
        // TODO: figure out how to loop through the response to get  a certain number of random lines of poetry
      });
  }, []
  );


  return (
    <div className="App">
      <header>
        <h1>exquisite corpse</h1>
        <h2>dev branch</h2>
      </header>
    </div>
  );
}



export default App;
