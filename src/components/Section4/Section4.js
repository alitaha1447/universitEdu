// import React, { useState } from 'react'
// import './Section4.css'
// import section4Img from './teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-explaining-math.jpg'

// function Section4() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [borderColor, setBorderColor] = useState('gray');
//   const [fontColor, setFontColor] = useState('black');
//   const [circleContainer, setCircleContainer] = useState('white');
//   const [arrow, setArrow] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     setBorderColor('green'); // Change the border color when the mouse enters
//     setFontColor('green');
//     setCircleContainer('green');
//     setArrow(true)
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setBorderColor('gray'); // Change the border color back when the mouse leaves
//     setFontColor('black');
//     setCircleContainer('white');
//     setArrow(false)

//   };


//   return (
//     <section className='sect-4'>
//       <div className='container-fluid sect-4-container'>
//         <div className='row sect-4-row'>
//           <div className='col-xl-6 col-12'>
//             <div className='sect-4-parent1 m-5'>
//               <div className='mt-3'>
//                 <h1>ESSENTIAL RESOURCES</h1>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.
//                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
//               </div>
//               <div className='container' style={{ marginTop: '3rem' }}>

//                 <div className={`row box-1 ${isHovered ? 'backgroundEffect' : ''}`}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   style={{ borderColor: borderColor }} // Set the border color dynamically
//                 >
//                   <div className={`  col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2`}>
//                     <h2 style={{ fontWeight: '700', color: fontColor }}>First year students</h2>
//                     <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

//                   </div>
//                   <div className={` col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle`}>
//                     <div class="circle-container" style={{ backgroundColor: circleContainer }}>
//                       {/* <div class="arrow" style={{ borderColor: arrow }}></div> */}
//                       <div className={`arrow ${arrow ? 'arrowEffect' : 'arrow'}`}></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='row box-1'>
//                   <div className='col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2'>
//                     <h2 style={{ fontWeight: '700' }}>Tuition & fees</h2>
//                     <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

//                   </div>
//                   <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle'>
//                     <div class="circle-container" >
//                       <div class="arrow"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className='row box-1'>
//                   <div className='col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2'>
//                     <h2 style={{ fontWeight: '700' }}>International students</h2>
//                     <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

//                   </div>
//                   <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle'>
//                     <div class="circle-container">
//                       <div class="arrow"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='col-xl-6 col-12'>
//             <div className='sect-4-parent2' style={{ position: 'relative', right: '-12px' }}>
//               <img src={section4Img} alt='teacher' className='img-fluid' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section >
//   )
// }

// export default Section4

import React, { useState } from 'react';
import './Section4.css';
import section4Img from './teacher-smart-instructor-grey-suit-classroom-with-computer-whiteboard-explaining-math.jpg';

function Section4() {
  const [box1Hovered, setBox1Hovered] = useState({ isHovered: false, borderColor: 'gray', fontColor: 'black', circleContainer: '', arrow: false });
  const [box2Hovered, setBox2Hovered] = useState({ isHovered: false, borderColor: 'gray', fontColor: 'black', circleContainer: '', arrow: false });
  const [box3Hovered, setBox3Hovered] = useState({ isHovered: false, borderColor: 'gray', fontColor: 'black', circleContainer: '', arrow: false });

  const handleMouseEnter = (setHovered) => {
    setHovered({
      isHovered: true,
      borderColor: 'green',
      fontColor: 'green',
      circleContainer: 'green',
      arrow: true,
    });
  };

  const handleMouseLeave = (setHovered) => {
    setHovered({
      isHovered: false,
      borderColor: 'gray',
      fontColor: 'black',
      circleContainer: '',
      arrow: false,
    });
  };

  return (
    <section className='sect-4'>
      <div className='container-fluid sect-4-container'>
        <div className='row sect-4-row'>
          <div className='col-xl-6 col-12'>
            <div className='sect-4-parent1 m-5'>
              <div className='mt-3'>
                <h1>ESSENTIAL RESOURCES</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
              </div>
              <div className='container' style={{ marginTop: '3rem' }}>
                <div className={`row box-1 ${box1Hovered.isHovered ? 'backgroundEffect' : ''}`}
                  onMouseEnter={() => handleMouseEnter(setBox1Hovered)}
                  onMouseLeave={() => handleMouseLeave(setBox1Hovered)}
                  style={{ borderColor: box1Hovered.borderColor }}
                >
                  <div className={`col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2`}>
                    <h2 style={{ fontWeight: '700', color: box1Hovered.fontColor }}>First year students</h2>
                    <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                  </div>
                  <div className={` col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle`}>
                    <div class="circle-container" style={{ backgroundColor: box1Hovered.circleContainer }}>
                      <div className={`arrow ${box1Hovered.arrow ? 'arrowEffect' : 'arrow'}`}></div>
                    </div>
                  </div>
                </div>
                <div className={`row box-1 ${box2Hovered.isHovered ? 'backgroundEffect' : ''}`}
                  onMouseEnter={() => handleMouseEnter(setBox2Hovered)}
                  onMouseLeave={() => handleMouseLeave(setBox2Hovered)}
                  style={{ borderColor: box2Hovered.borderColor }}
                >
                  <div className={`  col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2`}>
                    <h2 style={{ fontWeight: '700', color: box2Hovered.fontColor }}>First year students</h2>
                    <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                  </div>
                  <div className={` col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle`}>
                    <div class="circle-container" style={{ backgroundColor: box2Hovered.circleContainer }}>
                      <div className={`arrow ${box2Hovered.arrow ? 'arrowEffect' : 'arrow'}`}></div>
                    </div>
                  </div>
                </div>
                <div className={`row box-1 ${box3Hovered.isHovered ? 'backgroundEffect' : ''}`}
                  onMouseEnter={() => handleMouseEnter(setBox3Hovered)}
                  onMouseLeave={() => handleMouseLeave(setBox3Hovered)}
                  style={{ borderColor: box3Hovered.borderColor }}
                >
                  <div className={`  col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 p-2`}>
                    <h2 style={{ fontWeight: '700', color: box3Hovered.fontColor }}>First year students</h2>
                    <p style={{ fontSize: '1.2rem' }}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                  </div>
                  <div className={` col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 p-2 center-circle`}>
                    <div class="circle-container" style={{ backgroundColor: box3Hovered.circleContainer }}>
                      <div className={`arrow ${box3Hovered.arrow ? 'arrowEffect' : 'arrow'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-12'>
            <div className='sect-4-parent2' style={{ position: 'relative', right: '-12px' }}>
              <img src={section4Img} alt='teacher' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
