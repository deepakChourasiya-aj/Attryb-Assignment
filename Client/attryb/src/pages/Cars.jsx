import axios from "axios";
import React, { useEffect, useState } from "react";
const headers = {
  "Content-Type": "application/json",
  Authorization: JSON.parse(localStorage.getItem("token")),
};

const Cars = () => {
  const [data, setData] = useState([]);

  const handleFilter = async (e) => {
    e.preventDefault();
    let query = e.target.value;
    const url = `https://abbtrybackend.onrender.com/vehicle/?sort=${query}`;
    const response = await axios.get(url, { headers });
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(async () => {
    try {
      // const url = `https://abbtrybackend.onrender.com/vehicle`;
      const url = `https://abbtrybackend.onrender.com/vehicle/all`;
      const response = await axios.get(url, { headers });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1>Available Cars</h1>
      <div>
        <select onChange={handleFilter} style={filterStyle} name="" id="filter">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          margin: "auto",
          placeItems: "center",
        }}
      >
        {data.map((carData) => (
          <div style={cardStyles}>
            <img
              src={carData.imageUrl}
              alt={carData.title}
              style={imageStyles}
            />
            <div style={contentStyles}>
              <h2 style={titleStyles}>{carData.title}</h2>
              <div style={infoStyles}>
                <div>
                  <strong>Year:</strong> {carData.yearOfModel}
                </div>
                <div>
                  <strong>Model:</strong> {carData.modelName}
                </div>
                <div>
                  <strong>Registration Place:</strong>{" "}
                  {carData.registrationPlace}
                </div>
                <div>
                  <strong>Mileage:</strong> {carData.mileage}
                </div>
                <div>
                  <strong>Kilometers on Odometer:</strong>{" "}
                  {carData.kmsOnOdometer}
                </div>
                <div>
                  <strong>List Price:</strong> {carData.listPrice}
                </div>
                <div>
                  <strong>Available Colors:</strong>{" "}
                  {carData.availableColors.join(", ")}
                </div>
                <div>
                  <strong>Power:</strong> {carData.power}
                </div>
                <div>
                  <strong>Max Speed:</strong> {carData.maxSpeed}
                </div>
                <div>
                  <strong>Description:</strong> {carData.description}
                </div>
                <div>
                  <strong>Number of Accidents Reported:</strong>{" "}
                  {carData.numAccidentsReported}
                </div>
                <div>
                  <strong>Number of Previous Buyers:</strong>{" "}
                  {carData.numPreviousBuyers}
                </div>
                <div>
                  <strong>Original Paint:</strong>{" "}
                  {carData.originalPaint ? "Yes" : "No"}
                </div>
                <div>
                  <strong>Major Scratches:</strong>{" "}
                  {carData.majorScratches ? "Yes" : "No"}
                </div>
                <div>
                  <strong>Dealer ID:</strong> {carData.dealerId}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const filterStyle = {
  padding: "10px",
};
const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "300px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const imageStyles = {
  width: "100%",
  marginBottom: "10px",
  borderRadius: "5px",
};

const contentStyles = {
  width: "100%",
};

const titleStyles = {
  fontSize: "24px",
  marginBottom: "10px",
};

const infoStyles = {
  fontSize: "16px",
};
export default Cars;


// Create a Signup, login Screen for the user authentication.
// o Create a page where Dealer can add their second-hand car details with specifications.
// ▪ Car details page will have Image, Title, and 5 bullet point description of the page
// o Create filters on Price, Colors, and Mileage.
// o Create a page where Dealer can see all the second-hand c