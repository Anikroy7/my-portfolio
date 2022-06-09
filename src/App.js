
import './App.css';
import Home from './Pages/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';


function App() {
  return (
    <div className='px-10'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div >
  );
}

export default App;
