import React from 'react';
import './App.css';

// Background Component
const Background = () => {
  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        {/* Content goes here */}
      </header>
    </div>
  );
}

export default App;
