import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [setvalue,newvalue]=useState(0)
  return (
    <> 
    <h1 id="moving"><marquee>This is My Counter Machine</marquee></h1>
    <center>
      <div id="counter-box"> <h3 id="content">{setvalue} </h3></div>
      <br/>
      <button className="btn mx-2" onClick={()=>newvalue(setvalue+1)}>INCREMENT</button>
      <button className="btn" onClick={()=>newvalue(setvalue-1)}>DECREMENT</button>
      </center>
     
    
    </>
   
  );
}

export default App;
