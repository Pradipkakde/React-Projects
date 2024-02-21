
import './App.css';

function App() {

const handleClickFunction=(e)=>{
  const body= document.querySelector('body')
  body.style.backgroundColor=getRandomcolor();
  e.target.style.backgroundColor=getRandomcolor();
};
function getRandomcolor(){
  let letters='0123456789ABCDEFG'
  let color='#'
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)]
    
  }
  return color
}


  return (
    <>
    <div className="container">
     <h1>Random Background Color</h1>
     <button className="btn" onClick={handleClickFunction}>CHANGE COLOR</button>
    </div>
    </>
  );
}

export default App;
