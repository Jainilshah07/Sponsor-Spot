import React from "react";

const Sponsorlist = () => {
    return (
        <div className='mt-5'>
            <div class="input-group flex-nowrap mb-3 px-5">
                <span class="input-group-text w-25" id="addon-wrapping">Sr. No.</span>
                <span class="input-group-text w-25" id="addon-wrapping">Amount</span>
                <span class="input-group-text w-25" id="addon-wrapping">Type of sponsor</span>
                <span class="input-group-text w-25" id="addon-wrapping">Status</span>
            </div>
            <label className='text-white fs-3'>These are Companies based on your requirements</label>
            <div className='mt-5'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card " style={{ width: "20rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card" style={{ width: "20rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card" style={{ width: "20rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsorlist;