import React, { useEffect } from "react";
import "./CSS/TempApp.css";
import { useState } from "react";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = ``;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box" style={{ marginLeft: "35%", margin: "10%" }}>
        <div className="Header">
          <h3>Weather App</h3>
        </div>

        <div className="container-sm">
          <div className="inputData" style={{ margin: "145px" }}>
            <input
              type="search"
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location" />
              <i className="fas fa-street-view">{search}</i>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="tempmin_max">Min:36 | Max:40</h3>
            </div>

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
