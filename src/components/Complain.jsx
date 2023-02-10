import React from 'react'

function Complain() {
    return (
        <>
            {/* <div className="border col-lg-6 ">
                <div className="form-floating m-3 d-flex fw-bold">
                    <p className='mt-4 mb-4 fs-4 col-lg-3'>Enter your complaint:</p>
                    <textarea rows="4" cols="7" className="form-control w-50" placeholder="Leave a comment here" id="floatingTextarea2 me-2" style={{ height: "100px" }}></textarea>
                </div>
                <div className="row g-3 align-items-center mb-3 ms-3 mt-1">
                    <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label fw-bold">Name of company</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                    </div>
                </div>
            </div> */}
            <div className='container'>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="form-floating m-3 d-flex fw-bold">
                            <p className='mt-4 mb-4 fs-4 col-lg-3'>Enter your complaint:</p>
                            <textarea rows="4" cols="7" className="form-control w-50" placeholder="Leave a comment here" id="floatingTextarea2 me-2" style={{ height: "100px" }}></textarea>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-8">
                            <div className="d-flex">
                                <div className="">
                                    <label for="inputPassword6" className="col-form-label fw-bold">Name of company</label>
                                </div>
                                <div className="col-auto">
                                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Complain;
