import logo from './logo.svg';
import './App.css';

// import sys;
import { Container } from './Components/StyleProp';
import { Button, Input } from './Components/EventProps';
import { Status } from './Components/Status';
import { Counter } from './State/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter></Counter> */}
        <Status status={'success'} />
        <img src={logo} className="App-logo"
         alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> 
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Container styles={
          { border: "7px solid white",
           padding: "1rem" }
          }/> 
        */}
        {/* <Button handleClick={(event, id)=>{
          console.log(id, React, event)
        }} />
        <Input value='' handleChange={event=>console.log(event)} /> */}
      </header>
    </div>
  );
}

export default App;
