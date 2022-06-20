
import { useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from "react-router-dom";
import ProjectDetails from './Pages/ProjectDetails';
import AboutMe from './Pages/AboutMe';
import Blogs from './Pages/Blogs';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectDetail/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div >
  );
}

export default App;
