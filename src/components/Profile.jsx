import React from 'react'

const Profile = () => {
  return (
    <div className='fw-bold '>
      <div className="d-flex mt-5">
        <div className="col-lg-2"></div>
        <div className="card col-lg-3 me-3 bg-primary">
          <div className="card-body ">
            <h5 className="card-title text-white">Company Details</h5>
            <form>
              <div >
              <div className="row g-3 align-items-center mb-3 ">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold text-white">Year of Foundation</label>
                </div>
                <div className="col-auto">
                  <input type="Date" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>


              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold text-white"> Company Size</label>
                </div>
                <div className="col-auto">
                  <input type="Text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>

                <div className="row g-3 align-items-center mb-3 mt-1">
                  <div className="col-auto">
                    <label for="inputPassword6" className="col-form-label fw-bold text-white">Revenue</label>
                  </div>
                  <div className="col-auto">
                    <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                  </div>
                  <div className="col-auto">
                  </div>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card col-lg-6">
          <div className="card-body">
            <h5 className="card-title fw-bold">My Sponsors</h5>
            <form>
              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold">Number of sponsor events</label>
                </div>
                <div className="col-auto">
                  <input type="number" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold">Types of Event Sponsored</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
      <div className="d-flex m-3">
        <div className="col-lg-2"></div>
        <div className="card col-lg-6  d-flex me-3">
          <div className="card-body">
            <h5 className="card-title">Company details</h5>
            <form>
              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold">Description About the company:</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold">Location:</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold">Industry Expertise:</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

            </form>
          </div>
        </div>
        <div className="card col-lg-3 bg-primary">
          <div className="card-body ">
            <h5 className="card-title text-white">Card Title</h5>
            <form>
            <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold text-white">Email:</label>
                </div>
                <div className="col-auto">
                  <input type="email" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3 mt-1">
                <div className="col-auto">
                  <label for="inputPassword6" className="col-form-label fw-bold text-white">Phone:</label>
                </div>
                <div className="col-auto">
                  <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                </div>
                <div className="col-auto">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Profile
