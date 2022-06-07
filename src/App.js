import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber/Navber';
import Dairy from './Components/Dairy/Dairy';
import AddMemory from './Components/Dairy/AddMemory/AddMemory';
import SeeMemory from './Components/Dairy/SeeMemory/SeeMemory';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dairy" element={<Dairy/>}>
          <Route index element={<AddMemory/>}/>
          <Route  path="seememory" element={<SeeMemory/>}/>
        </Route>
        </Routes> 
    </div>
  );
}

export default App;
