import React, { useEffect, useState } from 'react';
import './App.css';
import logo from '../Assests/Logo.png';
import logoName from '../Assests/logoName.png';
import fakeQRCode from '../Assests/FakeQRCode.png';

const Background = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animation after a slight delay to ensure page load
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    const attractionStrength = 0.1;
    const maxDistance = 100;

    function move() {
      curX += (tgX - curX) * attractionStrength;
      curY += (tgY - curY) * attractionStrength;

      const distX = Math.abs(tgX - curX);
      const distY = Math.abs(tgY - curY);
      const distance = Math.sqrt(distX ** 2 + distY ** 2);

      const scale = 1 + (1 - Math.min(distance / maxDistance, 1)) * 0.3;
      const glow = Math.min(distance / maxDistance, 1) * 50;

      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px) scale(${scale}) rotate(${distance * 0.1}deg)`;
      interBubble.style.boxShadow = `0 0 ${glow}px rgba(128, 0, 128, 0.8)`;

      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`gradient-bg ${animationStarted ? 'animate-gradients' : ''}`}>
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

const NavBar = () => {
  return(
  <nav className="navbar">
      <ul className="navbar-list">
      <li className="logoImg">
      <img src={logo} alt="Profile" className="nav-img" />
        </li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Events</a></li>
        <li><a href="#services">Contact</a></li>
        <li><a href="#contact">Sponsors</a></li>
        <div className='profile/login'></div>
      </ul>
      <button className='Signin'>Sign In</button>
  </nav>

  );
};

const handleClick = () => {
  alert("Button clicked!");
};

const MainBody = () => {
return(
  <div className='mainBody'>
  <img src={logoName} alt="Profile" className="Logobig-img" /> 
  
  {/* EVENT TIMER */}
  <div className="EventTimerSqaure">
    <h1>Upcoming Event!</h1>
    <div className='EventTimer'>{/* count down goes here */}</div>
  </div>

  {/* FEEDBACK*/}
  <div className="FeedbackSqaure">
    <h1>Tell us how to improve</h1>
    <button onClick={handleClick}>Help Us Learn</button>
  </div>

  {/*JOIN OUR GROUP*/}
  <div className="JoinGroupSqaure">
      <h1>
        Join Our <span className="GroupChat">Group Chat</span>!
      </h1>
      <img src={fakeQRCode} alt="Profile" className="fakeQRcode" />
    </div>

    {/*ABOUT US*/}

    <div className="AboutUs">
  <p>
    We are a <span className="highlight">student-led group</span> dedicated to supporting and 
    <span className="highlight"> empowering women.</span> 
    Our mission is to foster a strong, inclusive community where members can build confidence 
    in their technical skills, connect with like-minded peers, and 
    <span className="highlight"> gain industry insights.</span> 
    We achieve this through a range of initiatives, including mentorship programs, technical
    workshops, networking events, and hackathons.
  </p>
</div>




  </div>
);
};

const Foot = () => {
  return (
    <div className='footer'>
      <p>Created by Women@CS - Empowering Women in Tech</p>
      <p><a href="mailto:cm2165@hw.ac.uk?cc=po2010@hw.ac.uk">cm2165@hw.ac.uk</a> | <a href="mailto:po2010@hw.ac.uk?cc=cm2165@hw.ac.uk">po2010@hw.ac.uk</a></p>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Background />
      
      <header className="App-header">
        {<NavBar />}
      </header>

      <body className="App-Body">
      {<MainBody />}
      </body>

      <footer className='App-Footer'>
      {<Foot />}
      </footer>

    </div>
  );
}

export default App;
