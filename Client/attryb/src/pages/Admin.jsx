import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("token")),
  };
  useEffect(async () => {
    try {
      const url = `https://abbtrybackend.onrender.com/vehicle`;
      const response = await axios.get(url, { headers });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const hanldeDelete = async (id) => {
    let url = `https://abbtrybackend.onrender.com/vehicle/${id}`;
    let response = await axios.delete(url, { headers });
    if (response.status === 200) {
      alert("Vehicle deleted successfully");
    }
    console.log(response);
  };

  const handleEditClick = async (id) => {
    const res = await axios.get(`https://abbtrybackend.onrender.com/vehicle/${id}`, {
      headers,
    });
    const title = prompt("Enter new title:");
    const registrationPlace = prompt("Enter new registrationPlace :");
    const listPrice = prompt("Enter new listPrice :");
    const maxSpeed = prompt("Enter new maxSpeed :");
    const description = prompt("Enter new description :");
    const car = {
      title,
      registrationPlace,
      listPrice,
      maxSpeed,
      description,
    };
    const update = await axios.patch(
      `https://abbtrybackend.onrender.com/vehicle/${id}`,
      car,
      { headers }
    );
  };

  return (
    <>
        <h1>Welcome Dealers </h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        margin: "auto",
      }}
    >
      {data.map((carData) => (
        <div style={cardStyles}>
          <img src={carData.imageUrl} alt={carData.title} style={imageStyles} />
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
                <strong>Registration Place:</strong> {carData.registrationPlace}
              </div>
              <div>
                <strong>Mileage:</strong> {carData.mileage}
              </div>
              <div>
                <strong>Kilometers on Odometer:</strong> {carData.kmsOnOdometer}
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
              <div>
                <button
                  onClick={() => {
                    hanldeDelete(carData._id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEditClick(carData._id);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </>
  );
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
export default Admin;
