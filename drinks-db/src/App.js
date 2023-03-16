import './App.css';
import Signup from './Components/signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Homepage from './Components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
