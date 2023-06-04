import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';

import './App.css';
import Nav from './components/Nav';
import spaceData from "./data.json";
const Home = lazy(()=> import('./components/Home'));
const Destination = lazy(()=> import('./components/Destination'));
const Crew = lazy(()=> import('./components/Crew'));
const Technology = lazy(()=> import('./components/Technology'));


function App() {
  const data = spaceData;


  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
            }/>
          <Route path='/destination' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Destination data={data.destinations} />
            </Suspense>
            }/>
          <Route path='/crew' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Crew data={data.crew} />
            </Suspense>
            }/>
          <Route path='/technology' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Technology data={data.technology} />
            </Suspense>
            }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
