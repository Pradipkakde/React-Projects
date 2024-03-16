import Youtube from './component/Youtube';
import './App.css';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom';
import English from './component/English';
import Hindi from './component/Hindi';
import Marathi from './component/Marathi';
import God from './component/God';
function App() {
  return (
    <div>
      <BrowserRouter>
     <Youtube></Youtube>
     <Routes>
      <Route path='/english' element={<English/>}></Route>
      <Route path='/hindi' element={<Hindi/>}></Route>
      <Route path='/marathi' element={<Marathi/>}></Route>
      <Route path='/god' element={<God/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
