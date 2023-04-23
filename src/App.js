import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import spaceData from "./data.json";

function App() {
  const data = spaceData;


  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/destination' element={<Destination data={data.destinations} />}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
