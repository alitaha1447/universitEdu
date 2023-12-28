import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import img2 from './logo.png'




function Navbar() {


  const [clicked, setClicked] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 500) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  function handleClick() {
    if (clicked === false) {
      setClicked(true); // If 'clicked' is true, set it to false
    } else if (clicked === true) {
      setClicked(false); // If 'clicked' is false, set it to true
    }
  }

  return (
    <>
      {/* <nav className={`fixed-top1 ${scrolled ? 'active' : ''} ${clicked ? 'mobile-active' : ''}`}> */}
      <nav className={`fixed-top1`}>

        <div className='nav-title'>
          <img src={img2} alt='logo' />
          {/* <p className='nav-title-1'><span style={{ color: 'green', fontWeight: 'bold', fontSize: '2rem' }}>UNIVERSITY</span><br /><span style={{ fontSize: '1.2rem' }}>Landmark Education</span></p> */}
        </div>
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <Link className='link' to={'/'} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Home</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Programs</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Blog</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className='nav-icon'>
          <span className='facebook'><FontAwesomeIcon icon={faFacebook} /></span>
          <span className='twitter'><FontAwesomeIcon icon={faTwitter} /></span>
          <span className='linkedin'><FontAwesomeIcon icon={faLinkedin} /></span>
          <span className='youtube'><FontAwesomeIcon icon={faYoutube} /></span>
          <span className='envelope'><FontAwesomeIcon icon={faEnvelope} /></span>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav >
    </>
  )
}

export default Navbar
