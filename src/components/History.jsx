import React, { useState, useEffect } from "react";
import axios from "../axios";

const History = () => {
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("/GetAvailableSponsorships/GetAvailableSponsorships/");
      setMyData(res.data);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  const [myData2, setMyData2] = useState([]);

    const getApiData2 = async () => {
        try {
          const res = await axios.get("/GetAppSponser/GetSponserDetails");
          setMyData(res.data);
        } catch (error) {
        console.log("Error in getting data",error)
        }
      };

      let company = ["Trinity", "Technex'23" ,"DJ Init.AI"];

  useEffect(() => {
    getApiData();
    getApiData2();
  }, []);
  return (
    <>
      <div className="p-2">
        <p className="fs-3 my-3">SponsorShips Recieved</p>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Company Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
          {myData.map((data, index) => (
          <tr className="" role="row" key={data.id}>
              <td className="mx-5" scope="row">{index+1}</td>
              <td>{company[index]}</td>
              <td>{data.ExpectedAmount}</td>
          </tr>
        ))}
        </tbody>
        </table>

        <p className="fs-3 my-3">SponsorShips Given</p>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Sr.no</th>
              <th scope="col">Company Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
          {myData2.map((data, index) => (
          <tr className="" role="row" key={data.id}>
              <td className="mx-5" scope="row">{index+1}</td>
              <td>{data.EventTitle}</td>
              <td>{data.ExpectedAmount}</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
