import './App.css';
import Navbar from './componants/Navbar';
import Textarea from './componants/Textarea';
import About from './componants/About';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
        setmode('dark');
        document.body.style.backgroundColor="#2f4b74";
    }
    else {
        setmode('light');
        document.body.style.backgroundColor="white";
    }
};

  return (
    <>
    
    <Router>
    <Navbar heading='Word Counter' mode={mode} togglemode={togglemode}/>
    <div className='container my-4'>
    <Routes>
          <Route exact path="/about" element ={<About />} />
          <Route exact path="/" element ={<Textarea title='Enter Text To Analyze' mode={mode}/>} />
    </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;
