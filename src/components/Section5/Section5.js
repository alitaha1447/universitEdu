/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Section5.css';
import img1 from './Img/pexels-abby-chung-1106468.jpg';
import img2 from './Img/pexels-buro-millennial-1438072.jpg';
import img3 from './Img/pexels-pixabay-256490.jpg'
const Section5 = () => {
  const images = [img1, img2, img3];

  return (
    <section className='sect-5 '>
      <div className='container-fluid  pt-5'>
        <div className='row mt-5 ms-auto me-auto'>
          <div className='col-xl-6 col-7  text-start ps-5'>
            <p className='topStories'>TOP STORIES</p>
          </div>
          <div className='col-xl-6 col-5  text-end pe-5'>
            <p className='moreStories'>More Stories</p>
          </div>
        </div>
      </div>
      <div className="image-grid mt-3" >
        {images.map((imageUrl, index) => (
          <div className="card ms-auto me-auto" style={{ width: '50vh', border: 'none' }}>
            <img className='img-fluid img-ht' key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            <div class="card-body">
              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
