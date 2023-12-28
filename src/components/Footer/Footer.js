import React from 'react'
import './Footer.css'
import img1 from './img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer >
      <div className='container footer-container'>
        <div>
          <a href='#index.html'>
            <img src={img1} style={{ height: '4rem' }} />
          </a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div>
            <p>Work</p>
            <p>Services</p>
            <p>Products</p>
            <p>Tips & Tricks</p>
          </div>
        </div>
        <div>
          <h4>Programs</h4>
          <div>
            <p>Air freight</p>
            <p>Ocean freight</p>
            <p>Large projects</p>
          </div>
        </div>
        <div>
          <h4>Resourses</h4>
          <div>
            <p>FAQ</p>
            <p>Submit Ticket</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h4>Newsletter</h4>
          <div className='input-container'>
            <p>Subscribe newsletter to get updates.</p>
            <div class="input-group mb-3">
              <input type="text" placeholder='Enter your email' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              <span class="input-group-text bg-success" id="inputGroup-sizing-default">
                <FontAwesomeIcon icon={faLocationArrow} />
              </span>
            </div>
            <p></p>
            <p></p>
            <div className='footer-icon d-flex'>
              <div>
                <span className='facebook'><FontAwesomeIcon className='faFacebook' icon={faFacebook} /></span>
              </div>
              <div>
                <span className='twitter'><FontAwesomeIcon icon={faTwitter} /></span>
              </div>
              <div>
                <span className='linkedin'><FontAwesomeIcon icon={faLinkedin} /></span>
              </div>
              <div>
                <span className='youtube'><FontAwesomeIcon icon={faYoutube} /></span>
              </div>
              <div>
                <span className='envelope'><FontAwesomeIcon icon={faEnvelope} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container taha-container'>
        <div className='border-top'>
          <div className='footer-para '>
            <p>Copyright © 2023 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} style={{ color: 'green' }} /> by <a href="https://colorlib.com" target="_blank" style={{ color: 'green' }}>Colorlib</a></p>
          </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer
