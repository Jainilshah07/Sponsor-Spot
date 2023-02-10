import React from 'react';
import Image from "../asset/sponsorImg.svg";
import { useNavigate } from 'react-router-dom';
const Sponsor=()=> 
{
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/Sponsorlist");
    }
   return(
    <>
    <div className='container d-flex min-vw-100 min-vh-100 overflow-hidden' style={{backgroundColor:"#8cb1c2"}}>
    
        <div className='row'> 
        <div className='col-lg-1'></div>
        <div className='col-lg-4'>
    <form className='border border-secondary mt-5 p-5 h-auto'>

    
        <div className="row g-3 align-items-center mb-3 mt-1">
        <div className="col-auto">
            <label for="inputPassword6" className="col-form-label fw-bold">Amount</label>
        </div>
        <div className="col-auto">
            <input type="number" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
        </div>
        <div className="col-auto">
        </div>
        </div>

     <select className="form-select form-select-sm mt-1" aria-label=".form-select-sm example">
            <option selected className="fw-bold">Category</option>
            <option value="1">Title Sponsor</option>
            <option value="2">Associate Sponsor</option>
            <option value="3">Partners</option>
    </select>

    <select className="form-select form-select-sm mt-4" aria-label=".form-select-sm example">
            <option selected className='fw-bold'>Types of Sponsors</option>
            <option value="1">Food</option>
            <option value="2">Energy drinks</option>
            <option value="3">Goodies</option>
            
    </select>

    <div className="row g-3 align-items-center mt-1 mb-3">
        <div className="col-auto">
            <label for="inputPassword6" className="col-form-label fw-bold">Past Count of sponsors</label>
        </div>
        <div className="col-auto">
            <input type="number" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
        </div>
        <div className="col-auto">
        </div>
        </div>

        <div className="mb-3">
        {/* <label for="exampleFormControlTextarea1" className="form-label text-left">Deliverables</label> */}
        <div className='mr-auto ml-0 mb-3 fw-bold'>Deliverables</div>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        
        <div classNameName="col-auto">
        {/* <button type="button" class="btn btn-danger p-2 border border-secondary">Submit</button> */}
        <button className='border border-secondary p-2 bg-success fw-bold' onClick={handleSubmit}>Submit</button>
        </div>
        
    </form>
    </div>
    <div className='col-lg-7'>
    <div className='m-5'>
        <div className='ms-5'>
        <img src={Image} className="w-80+- h-100 ms-5 " alt=""/>
        </div>
        </div>
    </div>
    </div>
    </div>
        
    </>
   );

};

export default Sponsor;