import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search'; 
import UserDetail from './components/UserDetail'; 

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
