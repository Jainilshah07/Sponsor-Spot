import React from 'react'
import becomesponsor from "../assets/needsponsor.jpg";
import wantsponsor from "../assets/wantsponsor.jpg";

const Cards = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-2'>
                    </div>
                    <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-5 ">
                        <div className="card" style={{ width: "20rem" }}>
                            <img className="card-img-top" src={wantsponsor} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Heading 1</h5>
                                <p className="card-text">some text</p>
                                <a href="/" className="btn btn-primary">a button</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm- 
                    col-lg-4 d-flex justify-content-center mt-5">
                        <div className="card" style={{ width: " 20rem" }}>
                            <img className="card-img-top" src={becomesponsor} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Heading 2</h5>
                                <p className="card-text">some text</p>
                                <a href="#" className="btn btn-primary">a button</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
