import React from 'react'
import './Section2.css'
import professor from './counselor-4305394_1280.jpg'

function Section2() {
  return (
    <section className='sect-2'>
      <div className='container'>
        <div className='row sect-2-parent'>
          <div id='taha' className='col-xl-6 col-lg-6 col-12' >
            <img className='img-fluid' src={professor}></img>
          </div>
          <div id='ali' className='col-xl-6 col-lg-6  col-12' >
            <div className='row'>
              <div className='col-12'>
                <h1>A COMPREHENSIVE TEACHING APPROACH</h1>
              </div>
              <div className='col-12'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              </div>
              <div className='col-12'>
                <a href='#'>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className='sect-2'>
    //   <div className='container'>
    //     <div className='row sect-2-wrapper'>
    //       <div className='col-md-5 col-12' id='sect-2-img'>
    //         <img className='container-fluid' src={professor} alt='Teacher' />
    //       </div>
    //       <div className='col-2'></div>
    //       <div className='col-md-5 col-12' id='ali'>
    // <div className='row'>
    //           <div className='col-12'>
    //             <h1>A COMPREHENSIVE TEACHING APPROACH</h1>
    //           </div>
    //           <div className='col-12'>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    //           </div>
    //           <div className='col-12'>
    //             <a href='#'>Learn More</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Section2