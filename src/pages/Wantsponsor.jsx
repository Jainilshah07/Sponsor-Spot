import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../asset/sponsorclient.svg';
import axios from '../axios';

function Wantsponsor() {
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate("/avail-sponser-list")
    }

    const [input, setInput] = useState({
        EventStartDate:"", EventEndDate:"", EventTitle:"", EventDesc:"", Deliverables:"", ExpectedAmount:""
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
        const sponsor = {EventStartDate: input.EventStartDate, EventEndDate : input.EventEndDate ,EventTitle:input.EventTitle, EventDesc:input.EventDesc, Deliverables:input.Deliverables, ExpectedAmount: input.ExpectedAmount }
        console.log(sponsor);
        try{
            const res = await axios.post("/GetSponsor/GetSponsor", sponsor);
            console.log(res.data);
            navigate("/avail-sponser-list");
        }catch (error){
            console.log("error form content", error)
        }
        setInput({
            EventStartDate:"", EventEndDate:"", EventTitle:"", EventDesc:"", Deliverables:"", ExpectedAmount:""
        });
      };
    return (
        <>
            <div className='container d-flex  min-vw-100 min-vh-100 overflow-hidden fw-bold' style={{ backgroundColor: "#8cb1c2" }}>
                <div className='row'>
                    <div className="col-lg-1 my-5"></div>
                    <form className='border border-secondary p-5 col-lg-4 mt-5' >
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-auto">
                                <label className="col-form-label">Event start Date</label>
                            </div>
                            <div className="col-auto">
                                <input type="Date" name="EventStartDate" value={input.EventStartDate} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Event End Date</label>
                            </div>
                            <div className="col-auto">
                                <input type="Date" name="EventEndDate" value={input.EventEndDate} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center  my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Event Title</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" name="EventTitle" value={input.EventTitle} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Description</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" name="EventDesc" value={input.EventDesc} onChange={InputHandler} className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="my-3">
                            <div className='mr-auto '>Deliverables</div>
                            <textarea className="form-control" name="Deliverables" value={input.Deliverables} onChange={InputHandler} rows="3"></textarea>
                        </div>
                        <div className="my-3">
                            <label for="customRange1" className="form-label">Expected amount</label>
                            <textarea className="form-control" name="ExpectedAmount" value={input.ExpectedAmount} onChange={InputHandler} rows="3"></textarea>
                        </div>
                        <div className="form-check my-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">Do you belong to an NGO in anyway ?</label>
                        </div>
                        <div className="col-auto">
                            <button className='border border-secondary p-2 bg-success fw-bold' onClick={SubmitHandler}>Submit</button>
                        </div>
                        <div className="col-lg-1"></div>
                    </form>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <button onClick={handleSubmit} className='btn btn-primary my-4'>View Available Sponsorship </button>
                        <img src={pic} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wantsponsor;
