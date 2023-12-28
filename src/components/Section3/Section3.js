import React, { useState } from 'react'
import './Section3.css'
import student1 from './Img/istockphoto-1349297987-1024x1024.jpg'
import student2 from './Img/javier-trueba-iQPr1XkF5F0-unsplash.jpg'

function Section3() {

  const [effect1, setEffect1] = useState(false);
  const [effect2, setEffect2] = useState(false);

  const handleMouseEnter1 = () => {
    setEffect1(true);
  };

  const handleMouseLeave1 = () => {
    setEffect1(false);
  };

  const handleMouseEnter2 = () => {
    setEffect2(true);
  };

  const handleMouseLeave2 = () => {
    setEffect2(false);
  };

  return (
    <section className='sect-3'>
      <div className='container sect-3-container'>
        <div className='row parent1'>
          <div className='col-xl-2'></div>
          <div className='col-xl-8 '>
            <div style={{ textAlign: 'center' }}>
              <p className='para1'>PROGRAMS WE OFFER</p>
              <p className='para2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            </div>
          </div>
          <div className='col-xl-2'></div>
        </div>
        <div className='row parent2'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-12 sect-3-taha ' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <div className={`portrait ${effect1 ? 'borderEffect' : 'borderEffect1'}`}>
              <img src={student1} alt='taha' className={`img-fluid ${effect1 ? 'img-effect' : ''}`} />
              <h2 style={{ color: effect1 ? 'green' : '', fontWeight: '700' }}>Faculty of Science</h2>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              <button className='btn btn-success'>Learn More</button>
            </div>
          </div>

          <div className='col-xl-6 col-lg-6 col-md-6 col-12 sect-3-taha' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div className={`portrait ${effect2 ? 'borderEffect' : 'borderEffect1'}`}>
              <img src={student2} alt='taha' className={`img-fluid ${effect2 ? 'img-effect' : ''}`} />
              <h2 style={{ color: effect2 ? 'green' : '', fontWeight: '700' }}>Faculty of Science</h2>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <button className='btn btn-success'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Section3



