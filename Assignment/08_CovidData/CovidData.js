import React, { useEffect, useState } from "react";

export const CovidData = () => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");

    const data = await res.json();
    console.log(data.statewise);
    setState(data.statewise);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>State</th>
                <th>Confiremed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>

            <tbody>
              {state.map((currEle, index) => {
                return (
                  <tr key={index}>
                    <td>{currEle.state}</td>
                    <td>{currEle.confirmed}</td>
                    <td>{currEle.recovered}</td>
                    <td>{currEle.deaths}</td>
                    <td>{currEle.active}</td>
                    <td>{currEle.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
