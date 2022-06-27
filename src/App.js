import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Registry from './routes/Registry';
import Home from './routes/Home';
import './App.css';

function App(){

  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/registry" element={<Registry/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;