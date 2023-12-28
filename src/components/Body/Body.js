import React from 'react';
import './Body.css';

function Body() {
  return (
    <section className='containerStyle' style={{ height: '85vh' }}>
      <div className='container-fluid row'>
        <div className='col-12 col-sm-10'>
          <div className='bdSect-1'>
            <span>EDUCATION & SCHOOL</span>
            <h1>SHOWCASE COURSES, <br />EVENTS AND MORE!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Suspendisse varius enim in eros elementum tristique.</p>
            <div>
              <button className='btn btn-success'>Get Started Now</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Body;
