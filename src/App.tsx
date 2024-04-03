import { Route, Routes } from 'react-router';
import './App.css'
// src/App.tsx

import {Navbar} from './components/Navbar';
import About from './pages/About';
import Information from './pages/Information';
import Menu from './pages/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/menu"} element={<Menu/>}/>
        <Route path={"/information"} element={<Information/>}/>

      </Routes>
   
    </div>  
  );
}

export default App;