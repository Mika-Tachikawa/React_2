//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

//export default App;

import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };
  
  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };
  
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoredMessage />
      <ColoredMessage color="blue" message="お元気ですか？" />
      <p style={contentPinkStyle}>ピンクの文字確認</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
