import logo from './logo.svg';
import './App.css';
import React from "react"
import Question from './Question';

// window.onload = sendApiRequest

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.setState({
          items: json,
          DataisLoaded: true,
          answers: []
        });

      })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1>Please wait while data loads</h1></div>;
    return (
      <div className="App">
        <h1> Trivia </h1>
        {this.state.items.results.map((result) =>
          <Question result={result} answer={result.correct_answer} wrong={result.incorrect_answers} type={result.type} answers={shuffle([result.correct_answer, result.incorrect_answers[0], result.incorrect_answers[1], result.incorrect_answers[2]])} />)


        }
        <h1></h1>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
