import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import GetCompanies from './GetCompanies';


function Wsponsorlist() {
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);

    const handleSubmit = ()=>{
      navigate("/avail-a-sponsorship")
  }

    const getApiData = async () => {
        try {
          const res = await axios.get("/GetAppSponser/GetSponserDetails");
          setMyData(res.data);
        } catch (error) {
        console.log("Error in getting data",error)
        }
      };
    
      useEffect(() => {
        getApiData();
      }, []);
    return (
        <>
        <div className="row">
            <div className="col-lg-10"></div>
            <div className="col-lg-2 mt-2">
                <button onClick={handleSubmit} className='btn btn-primary my-4 bg-slate-500'>Apply more</button>
            </div>
        </div>
        <div className="">
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
        </div>
        
        <div>
            {
                myData.map((data,index) => (
                    <div className="col-span-1 px-2 py-2" key={data.id}>
                        <div className='mt-3'>
                         <div className="input-group flex-nowrap mb-3 px-5">
                            <span className="input-group-text w-25" id="addon-wrapping">{index+1}</span>
                            <span className="input-group-text w-25" id="addon-wrapping">{data.ExpectedAmount}</span>
                            <span className="input-group-text w-25" id="addon-wrapping">Veiw Company</span>
                            <span className="input-group-text w-25" id="addon-wrapping">Status</span>
                        </div>
                       </div>
                    </div>
                ))

            }

            <label className='text-black fs-3'>These are Companies based on your requirements</label>
            <GetCompanies addAmount={20000} />
        </div>
        </>
    );
}

export default Wsponsorlist;
