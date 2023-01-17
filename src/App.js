import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;