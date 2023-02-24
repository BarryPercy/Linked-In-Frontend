import React, { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import userPic from "../images/jovelynn.png";

function SecondNav() {

  function handleScroll() {
    const distance = window.scrollY;
  const nav = document.querySelector('.secondary-nav');

  if (nav) {
    if (distance > 50) { 
      nav.classList.add('show-nav');
    } else {
      nav.classList.remove('show-nav');
    }
  }
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='secondary-nav d-flex align-items-center justify-content-around fixed-nav'>
      <div className='d-flex align-items-center'>
        <Image src={userPic} alt="Profile" roundedCircle style={{width: 36, height: 36}} />
        <div className='ml-3'>
          <p style={{fontSize: "15px", marginBottom: "0", marginTop: "10px"}}>Jovellyn A Quiapos</p>
          <p style={{fontSize: "10px"}}>Jr Full Stack Dev</p>
        </div>
      </div>
      <div>
        <Button className='mx-1' href="#">More</Button>
        <Button className='mx-1' href="#">Add profile section</Button>
        <Button className='mx-1' href="#">Open to</Button>
      </div>
    </div>
  );
}

export default SecondNav;
