import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main.jsx'; // Import your Main component
import Container from './Components/Container.jsx'; // Import your Container component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        {/* Add other routes here */}
        <Route path="/" element={<Container/>} />
      </Routes>
    </Router>
  );
}

export default App;
