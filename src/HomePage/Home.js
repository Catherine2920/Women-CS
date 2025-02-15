import React from 'react';
import './Home.css';
import logoName from '../Assests/logoName.png';
import fakeQRCode from '../Assests/FakeQRCode.png';



const handleClick = () => {
    alert("Button clicked!");
  };
  
  const HomePage = () => {
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

  export default HomePage;