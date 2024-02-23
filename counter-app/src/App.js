import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [setvalue,newvalue]=useState(0)
  return (
    <> 
    <h1>This is My Counter Machine</h1>
    <center>
      <div id="counter-box"> <h3 id="content">{setvalue} </h3></div>
      <br/>
      <button className="btn btn-info" onClick={()=>newvalue(setvalue+1)}>Count the counting</button>
      </center>
     
    
    </>
   
  );
}

export default App;
