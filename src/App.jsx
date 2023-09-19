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



//import { ColoredMessage } from "./components/ColoredMessage";

//export const App = () => {
  //console.log("レンダリング");
  //const [num,setNum] = useState(0);
  
  //const onClickButton = () => {
    //setNum(num + 1);
  //};
  
  //return (
    //<>
      //<h1 style={{ color: "red" }}>こんにちは</h1>
      //<ColoredMessage />
      //<ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      //<ColoredMessage color="pink">元気です!</ColoredMessage>
      //<button onClick={onClickButton}>ボタン</button>
      //<p>{num}</p>
    //</>
  //);
//};





//import classes from "./App.module.scss";

//export const App = () => {
  //return (
    //<div>
      //<div className={classes.container}>
        //<p className={classes.title}>CSS Modules</p>
        //<button className={classes.button}>ボタン</button>
      //</div>
    //</div>
  //);
//};





export const App = () => {
  return (
    <div>
      <p>Styled JSX</p>
      <button>ボタン</button>
    </div>
  );
};