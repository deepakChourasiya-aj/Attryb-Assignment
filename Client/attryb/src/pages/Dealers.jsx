import axios from "axios";
import { useState } from "react";
const headers = {
  "Content-Type": "multipart/form-data",
  Authorization: JSON.parse(localStorage.getItem("token")),
};
const Dealers = () => {
  const [carData, setCarData] = useState({
    image: "",
    title: "",
    modelName: "",
    description: "",
    kmsOnOdometer: 0,
    majorScratches: false,
    originalPaint: false,
    numAccidentsReported: 0,
    numPreviousBuyers: 0,
    registrationPlace: "",
  });

  let url = `https://abbtrybackend.onrender.com/upload`;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === "checkbox" ? checked : files ? files[0] : value;

    setCarData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", carData.image);
    formData.append("title", carData.title);
    formData.append("modelName", carData.modelName);
    formData.append("description", carData.description);
    formData.append("kmsOnOdometer", carData.kmsOnOdometer);
    formData.append("majorScratches", carData.majorScratches);
    formData.append("originalPaint", carData.originalPaint);
    formData.append("numAccidentsReported", carData.numAccidentsReported);
    formData.append("numPreviousBuyers", carData.numPreviousBuyers);
    formData.append("registrationPlace", carData.registrationPlace);

    try {
      const response = await axios.post(
        "https://abbtrybackend.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log(response);
      // Handle the response
    } catch (error) {
      // Handle the error
      console.log(error);
      alert("Please fill all the details and Model perfectly");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1>Add New Car</h1>
        <form  style={{ display: 'flex', flexDirection: 'column',padding:"5px" ,border:"3px solid yellow"}} onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" name="image" onChange={handleChange} />
      </label>
      <br />
      <label>
        Title:
      </label>
        <input
          type="text"
          name="title"
          value={carData.title}
          onChange={handleChange}
          placeholder="Enter the title"
        />
      <br />
      <label>
        Model Name:
      </label>
        <input
          type="text"
          name="modelName"
          value={carData.modelName}
          onChange={handleChange}
          placeholder="Enter the model name"
        />
      <br />
      <label>
        Description:
      </label>
        <textarea
          name="description"
          value={carData.description}
          onChange={handleChange}
          placeholder="Enter the description"
        />
      <br />
      <label>
        KMs on Odometer:
      </label>
        <input
          type="number"
          name="kmsOnOdometer"
          value={carData.kmsOnOdometer}
          onChange={handleChange}
          placeholder="Enter the kilometers on odometer"
        />
      <br />
      <label>
        Major Scratches:
      </label>
        <input
          type="checkbox"
          name="majorScratches"
          checked={carData.majorScratches}
          onChange={handleChange}
        />
      <br />
      <label>
        Original Paint:
      </label>
        <input
          type="checkbox"
          name="originalPaint"
          checked={carData.originalPaint}
          onChange={handleChange}
        />
      <br />
      <label>
        Number of Accidents Reported:
      </label>
        <input
          type="number"
          name="numAccidentsReported"
          value={carData.numAccidentsReported}
          onChange={handleChange}
          placeholder="Enter the number of accidents reported"
        />
      <br />
      <label>
        Number of Previous Buyers:
      </label>
        <input
          type="number"
          name="numPreviousBuyers"
          value={carData.numPreviousBuyers}
          onChange={handleChange}
          placeholder="Enter the number of previous buyers"
        />
      <br />
      <label>
        Registration Place:
      </label>
        <input
          type="text"
          name="registrationPlace"
          value={carData.registrationPlace}
          onChange={handleChange}
          placeholder="Enter the registration place"
        />
      <br />
      <button  style={{
            padding: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Dealers;
