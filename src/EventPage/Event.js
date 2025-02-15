import React from 'react';
import './Event.css';
import Navbar from '../WebBase/Navbar';
import Footer from '../WebBase/Footer';
import Background from '../WebBase/Background';

function Event() {
    return (
      <div className="Event">
        <Background />
        
        <header className="Event-header">
          {<Navbar />}
        </header>
  
        <body className="Event-Body">
       
        </body>
  
        <footer className='Event-Footer'>
        {<Footer />}
        </footer>
  
      </div>
    );
  }
  
  export default Event;
  