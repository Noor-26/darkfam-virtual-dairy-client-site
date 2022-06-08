import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Shared/Navber/Navber';
import Dairy from './Components/Dairy/Dairy';
import AddMemory from './Components/Dairy/AddMemory/AddMemory';
import SeeMemory from './Components/Dairy/SeeMemory/SeeMemory';
import Login from './Components/Login/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Login/Register/Register';
import ReadMemory from './Components/Dairy/SeeMemory/ReadMemory';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dairy" element={
        <RequireAuth>
          <Dairy/>
        </RequireAuth>
        }>
          <Route index element={
           <RequireAuth>
           <AddMemory/>
         </RequireAuth>}/>
          <Route  path="seememory" element={
          <RequireAuth>
          <SeeMemory/>
        </RequireAuth>
        }/>
          <Route  path="memory/:id" element={
          <RequireAuth>
          <ReadMemory/>
        </RequireAuth>
         }/>
        </Route>
        </Routes> 
        <ToastContainer/>
    </div>
  );
}

export default App;
