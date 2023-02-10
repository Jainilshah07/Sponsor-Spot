import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Sponsorlist = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const handleSubmit=()=>{
    navigate("/become-a-sponsor");
  }

  const getApiData = async () => {
    try {
      const res = await axios.get("/GetAvailableSponsorships/GetAvailableSponsorships/");
      setMyData(res.data);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-10"></div>
        <div className="col-lg-2 mt-4">
          <button onClick={handleSubmit} className="btn btn-primary bg-slate-500">
            Give More Sponsorship
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div class="input-group flex-nowrap mb-3 px-5">
          <span class="input-group-text w-25" id="addon-wrapping">
            Sr.no
          </span>
          <span class="input-group-text w-25" id="addon-wrapping">
            Amount
          </span>
          <span class="input-group-text w-25" id="addon-wrapping">
            Sponsor Category
          </span>
          <span class="input-group-text w-25" id="addon-wrapping">
            Status
          </span>
        </div>
        {myData.map((data, index) => (
          <div className="col-span-1 px-2 py-2" key={data.id}>
            <div className="mt-3">
              <div class="input-group flex-nowrap mb-3 px-5">
                <span class="input-group-text w-25" id="addon-wrapping">
                  {index + 1}
                </span>
                <span class="input-group-text w-25" id="addon-wrapping">
                  {data.amount}
                </span>
                <span class="input-group-text w-25" id="addon-wrapping">
                  {data.SponserCategory}
                </span>
                <span class="input-group-text w-25" id="addon-wrapping">
                  Pending
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sponsorlist;
