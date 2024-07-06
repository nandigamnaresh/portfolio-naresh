// import React from 'react'
// import './Hire.css';
// import Venkat from './man3.png';

// export default function Hire() {
//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-lg-2 col-md-2 col-sm-1'></div>
//             <div className='col-lg-8 col-md-8 col-sm-10 bg-light p-5 mt-5'>
//             <div className="row">
//                 <div className='col-lg-6 col-md-12 col-sm-6'>
//                 <img src={Venkat} alt="Profile" className="profile-img" width={'300px'} />
//                 </div>
//                 <div className='col-lg-6 col-md-12 col-sm-6'>
//                 <div className="contact-info text-danger p-4  mt-5">
//         <h2>venkatesh Nuthakki</h2>
//         <p>Email: venkateshnuthakki02@gmail.com</p>
//         <p>Mobile: +91 8367269503</p> <br/>
//         <button alt="Contact me" id='button'>
//   <i>T</i>
//   <i>h</i>
//   <i>a</i>
//   <i>n</i>
//   <i>k</i>
//   <i>&nbsp;</i>
//   <i>Y</i>
//   <i>o</i>
//   <i>u</i>
//   <i>...😃</i>
// </button>
//       </div>
//                 </div>
     
  
      
//     </div>
//             </div>
//             <div className='col-lg-2 col-md-2 col-sm-1'></div>
//         </div>
    
//     </div>
//   )
// }



// import React from 'react'
// import './Hire.css';
// import Venkat from './man3.png';

// export default function Hire() {
//   return (
//     <div className='container'>
//         <div className='content'>
//             <div className='profile-section'>
//                 <img src={Venkat} alt="Profile" className="profile-img" />
//             </div>
//             <div className='info-section'>
//                 <div className="contact-info">
//                     <h2>venkatesh Nuthakki</h2>
//                     <p>Email: venkateshnuthakki02@gmail.com</p>
//                     <p>Mobile: +91 8367269503</p> <br/>
//                     <button alt="Contact me" id='button'>
//                         <i>T</i>
//                         <i>h</i>
//                         <i>a</i>
//                         <i>n</i>
//                         <i>k</i>
//                         <i>&nbsp;</i>
//                         <i>Y</i>
//                         <i>o</i>
//                         <i>u</i>
//                         <i>...😃</i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }





import React from 'react';
import './Hire.css';
// import Venkat from './pofi-6.png';
import Venkat from './vizag4.jpg';

export default function Hire() {
  return (
    <div className='hire-container'>
      <div className='hire-content'>
        <div className='hire-profile-section'>
          <img src={Venkat} alt="Profile" className="hire-profile-img" />
        </div>
        <div className='hire-info-section'>
          <div className="hire-contact-info">
            <h2>Nandigam Naresh</h2>
            
            <p>Email: nandigamnaresh999@gmail.com</p>
            <p>Mobile: +91 9390091216</p> <br/>
            <button alt="Contact me" className='hire-button'>
              <i>T</i>
              <i>h</i>
              <i>a</i>
              <i>n</i>
              <i>k</i>
              <i>&nbsp;</i>
              <i>Y</i>
              <i>o</i>
              <i>u</i>
              <i>...💝</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
