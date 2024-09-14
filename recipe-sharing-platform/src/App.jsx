import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="text-blue-500 text-3xl font-bold">
          Welcome to the Recipe Sharing Platform
        </h1>
      </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </main>
    </div>
    </Router>
  );
}

export default App;
