import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
 const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  //   http://localhost:8080/register
  const url = `https://abbtrybackend.onrender.com/register`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      role,
    };
    try {
      let res = await axios.post(url, user);
      console.log(res);
      if (res.status == 200) {
        alert("Account created successfully");
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        navigate("/");
      }
    } catch (error) {
      alert("Please fill all the fields correctly");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
    <div style={inputContainerStyles}>
      <label htmlFor="name" style={labelStyles}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyles}
        required
      />
    </div>
    <div style={inputContainerStyles}>
      <label htmlFor="email" style={labelStyles}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyles}
        required
      />
    </div>
    <div style={inputContainerStyles}>
      <label htmlFor="password" style={labelStyles}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyles}
        required
      />
    </div>
    <div style={inputContainerStyles}>
      <label htmlFor="role" style={labelStyles}>
       Select Role:
      </label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={selectStyles}
      >
        <option value="customer">Customer</option>
        <option value="dealer">Dealer</option>
      </select>
    </div>
    <button type="submit" style={buttonStyles}>Submit</button>
  </form>
  );
};
const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  maxWidth: "300px",
  margin: "100px auto",
};

const inputContainerStyles = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "15px",
};

const labelStyles = {
  marginBottom: "5px",
};

const inputStyles = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "3px",
};

const selectStyles = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "3px",
  appearance: "none",
};

const buttonStyles = {
  padding: "10px",
  border: "none",
  borderRadius: "3px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  cursor: "pointer",
};
export default Signup;
