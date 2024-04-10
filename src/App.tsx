import {Route, Routes } from 'react-router';
import './App.css'
// src/App.tsx

import {Navbar} from './Components/Navbar';
import About from './pages/About';
import Information from './pages/Information';
import Menu from './pages/Menu';
import Home from './pages/Home';

import InfoFooter from './Components/InfoFooter';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/About"} element={<About/>}/>
          <Route path={"/Menu"} element={<Menu/>}/>
          <Route path={"/Information"} element={<Information/>}/>
        </Routes>
        <InfoFooter/>
    </div>
  );
}

export default App;