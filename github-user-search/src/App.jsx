import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './components/Home'; // Create this component later
//import UserDetail from './components/UserDetail'; // Create this component later

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
