import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber/Navber';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes> 
    </div>
  );
}

export default App;
