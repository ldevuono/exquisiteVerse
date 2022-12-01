import { useState } from 'react';
import Form from './Form.js'
import './App.css';

function App() {

  //first create our states:
  // const [line, setLine] = useState([]);

  // function that will get the user's choice from the Form.js component:
  const chooseNumber = (e, userChoice) => {
    e.preventDefault();
    console.log(userChoice)
  }


  return (
    <div className="App">
      <header>
        <h1>exquisite verse</h1>
        <h2>dev branch</h2>
      </header>
      <Form
        chooseNumber={chooseNumber}
      />
    </div>
  );
}



export default App;
