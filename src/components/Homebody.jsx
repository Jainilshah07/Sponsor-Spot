import React from 'react';
import icon1 from "../asset/icons8hs.png";
import icon2 from "../asset/icons8m.png";
import icon3 from "../asset/icons8o.png";


function Homebody() {
  return (
    <>
       <div className='mb-5'>   
        <div className='fs-1'>Sponsor-Spot</div>     
        <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
           <div class="col-xl-2 col-md-4">
               <div class="icon-box d-flex">
                   <img className='me-3' src={icon1} />
                   <div className='d-flex flex-column'>
                    <a className='fs-5 fw-bold' href="">Sponsor</a>
                    <p className='fs-6'>13220</p>
                   </div>
              </div>
         </div>
         <div class="col-xl-2 col-md-4">
         <div class="icon-box d-flex">
                   <img className='me-3' src={icon2} />
                   <div className='d-flex flex-column'>
                    <a className='fs-5 fw-bold' href="">Deal</a>
                    <p className='fs-6'>6969</p>
                   </div>
              </div>
             </div>
             <div class="col-xl-2 col-md-4 ">
             <div class="icon-box d-flex">
                   <img className='me-3' src={icon3} />
                   <div className='d-flex flex-column'>
                    <a className='fs-5 fw-bold' href="">Opportunities</a>
                    <p className='fs-6'>3333</p>
                   </div>
              </div>
             </div>
         </div>
     </div>
    </>
  );
}

export default Homebody;
