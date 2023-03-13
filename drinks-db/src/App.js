import './App.css';
import { Link }   from 'react-router-dom'
import Signup from './Components/signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

function App() {
  return (
  <>
   <BrowserRouter>
  <>
   <div class="topnav">
   <Link to='/'>Home</Link>
      <a href="#drinks">Drinks</a>
      <a href="#api">API</a>
      <Link to='/signup'>Sign Up</Link>
      <a href="expore">Explore</a>
    </div>
    </>
    <Routes>
    <Route path='/' element={
    <Home />
    } />
    <Route path='/signup' element={<Signup />} />
    </Routes>
    <Signin /> 
    </BrowserRouter>
    </> 

  );
}

export default App;
