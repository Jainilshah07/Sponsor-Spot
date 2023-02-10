import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../asset/sponsorclient.svg';

function Wantsponsor() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/wsponserlist");
    }
    return (
        <>
            <div className='container d-flex  min-vw-100 min-vh-100 overflow-hidden fw-bold' style={{ backgroundColor: "#8cb1c2" }}>
                <div className='row'>
                    <div className="col-lg-1 my-5"></div>
                    <form className='border border-secondary p-5 col-lg-4 mt-5' >
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Event start Date</label>
                            </div>
                            <div className="col-auto">
                                <input type="Date" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Event End Date</label>
                            </div>
                            <div className="col-auto">
                                <input type="Date" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center  my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Event Title</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center my-3">
                            <div className="col-auto">
                                <label for="inputPassword6" className="col-form-label">Description</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="my-3">
                            {/* <label for="exampleFormControlTextarea1" className="form-label text-left">Deliverables</label> */}
                            <div className='mr-auto '>Deliverables</div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="my-3">
                            <label for="customRange1" class="form-label">Expected amount</label>
                            {/* <input type="range" class="form-range" id="customRange1" /> */}
                            <textarea className="form-control" name='expected amount' id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-check my-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">Do you belong to an NGO in anyway ?</label>
                        </div>
                        <div classNameName="col-auto">
                            <button className='border border-secondary p-2 bg-success fw-bold' onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="col-lg-1"></div>
                    </form>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <img src={pic} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wantsponsor;
