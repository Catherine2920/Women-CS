import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../WebBase/Navbar';
import Footer from '../WebBase/Footer';
import Background from '../WebBase/Background';
import HomePage from '../HomePage/Home';  // Ensure the correct path
import EventPage from '../EventPage/Event'; // Ensure the correct path


function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />

      <Routes>  {/* Define routes for each page */}
        <Route path="/" element={<HomePage />} />  {/* HomePage at the root path */}
        <Route path="/events" element={<EventPage />} />  {/* EventPage at /events */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
