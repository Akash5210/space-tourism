import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/destination' element={<Destination />}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
