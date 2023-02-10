import React, { useState } from 'react';
import Image from "../asset/sponsorImg.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios'
const Sponsor=()=> {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        amount:"", SponserType:"", SponserCategory:"", PastCount:"", Deliverables:"" 
      });
    
      const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInput({
          ...input,
          [name]: value,
        });
      };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const BeSponsor = { amount : input.amount ,SponserType:input.SponserType, SponserCategory:input.SponserCategory, Deliverables:input.Deliverables, PastCount: input.PastCount }
        console.log(BeSponsor);
        try{
            const res = await axios.post("/BeSponsor/BeSponsor", BeSponsor);
            console.log(res.data);
            navigate("/ur-sponsor-list");
        }catch (error){
            console.log("error form content", error)
        }
        setInput({
            amount:"", SponserCategory:"", SponserType:"", Deliverables:"", PastCount:""
        });
      };
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
            <input type="number" name="amount" value={input.amount} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline"/>
        </div>
        <div className="col-auto">
        </div>
        </div>

     <select name="SponserCategory" value={input.SponserCategory} onChange={InputHandler} className="form-select form-select-sm mt-1" aria-label=".form-select-sm example">
            <option selected className="fw-bold">Category</option>
            <option value="1">Title Sponsor</option>
            <option value="2">Associate Sponsor</option>
            <option value="3">Partners</option>
    </select>

    <select name="SponserType" value={input.SponserCategory} onChange={InputHandler} className="form-select form-select-sm mt-4" aria-label=".form-select-sm example">
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
            <input type="number" name="SponserType" value={input.SponserCategory} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline"/>
        </div>
        <div className="col-auto">
        </div>
        </div>

        <div className="mb-3">
        <div className='mr-auto ml-0 mb-3 fw-bold'>Deliverables</div>
        <textarea className="form-control" name="Deliverables" value={input.Deliverables} onChange={InputHandler} rows="3"></textarea>
        </div>
        
        <div classNameName="col-auto">
        <button className='border border-secondary p-2 bg-success fw-bold' onClick={SubmitHandler}>Submit</button>
        </div>
        
    </form>
    </div>
    <div className='col-lg-7'>
    <div className='m-3'>
        <div className='ms-5'>
            <Link to="/ur-sponsor-list"><button className='btn btn-primary my-4'>Your Given Sponsorships</button></Link>
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