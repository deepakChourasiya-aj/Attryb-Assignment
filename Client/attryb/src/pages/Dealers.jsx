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
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" name="image" onChange={handleChange} />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={carData.title}
          onChange={handleChange}
          placeholder="Enter the title"
        />
      </label>
      <br />
      <label>
        Model Name:
        <input
          type="text"
          name="modelName"
          value={carData.modelName}
          onChange={handleChange}
          placeholder="Enter the model name"
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={carData.description}
          onChange={handleChange}
          placeholder="Enter the description"
        />
      </label>
      <br />
      <label>
        KMs on Odometer:
        <input
          type="number"
          name="kmsOnOdometer"
          value={carData.kmsOnOdometer}
          onChange={handleChange}
          placeholder="Enter the kilometers on odometer"
        />
      </label>
      <br />
      <label>
        Major Scratches:
        <input
          type="checkbox"
          name="majorScratches"
          checked={carData.majorScratches}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Original Paint:
        <input
          type="checkbox"
          name="originalPaint"
          checked={carData.originalPaint}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Number of Accidents Reported:
        <input
          type="number"
          name="numAccidentsReported"
          value={carData.numAccidentsReported}
          onChange={handleChange}
          placeholder="Enter the number of accidents reported"
        />
      </label>
      <br />
      <label>
        Number of Previous Buyers:
        <input
          type="number"
          name="numPreviousBuyers"
          value={carData.numPreviousBuyers}
          onChange={handleChange}
          placeholder="Enter the number of previous buyers"
        />
      </label>
      <br />
      <label>
        Registration Place:
        <input
          type="text"
          name="registrationPlace"
          value={carData.registrationPlace}
          onChange={handleChange}
          placeholder="Enter the registration place"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Dealers;
