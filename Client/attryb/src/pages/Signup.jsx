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
  const url = `http://localhost:8080/register`;
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="dealer">Dealer</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
