import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async(e) => {
      e.preventDefault();
      const user = {
        email,password
      }
      const url = `https://abbtrybackend.onrender.com/login`
        try {
            const response = await axios.post(url,user);
            console.log(response.data.token);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            if(response){
                alert("Login successful");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            alert("Please fill all the details correctly")
        }
      console.log(user);
    };
  
    return (
      <form style={formStyles} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div style={inputContainerStyles}>
          <label  htmlFor="email" style={labelStyles}>Email:</label>
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
          <label htmlFor="password" style={labelStyles}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
            required
          />
        </div>
        <button type="submit"  style={buttonStyles} >Submit</button>
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
  
  const buttonStyles = {
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  };
  export default Login;
  