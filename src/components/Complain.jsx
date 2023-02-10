import React from 'react'

function Complain() {
    return (
        <div>
            <div className="form-floating">
                <p className='mt-4 mb-4 fs-4'>Enter your complain here</p>
                <textarea rows="4" cols="7" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2 me-2" style={{ height: "100px" }}></textarea>

            </div>
        </div>
    )
}

export default Complain;
