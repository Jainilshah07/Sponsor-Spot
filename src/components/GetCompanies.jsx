import React, { useState, useEffect } from "react";
import axios from "../axios";
import image from "../assets/sponsor.jpg";

const GetCompanies = (props) => {
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "/GetAvailableSponsorships/GetAvailableSponsorships"
      );
      setMyData(res.data);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="flex">
            {myData.map((data) => (
              <div className="col-lg-4 mx-auto py-2" key={data.id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.CompanyName}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <p className="btn btn-primary">{ data.amount + props.addAmount}</p>
                    <p className="btn btn-primary">{data.SponserType}</p>
                    <p className="btn btn-primary">{data.SponserCategory}</p>
                    <p className="">{data.Deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCompanies;
