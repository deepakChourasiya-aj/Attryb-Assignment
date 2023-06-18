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
      const url = `http://localhost:8080/login`
        try {
            const response = await axios.post(url,user);
            console.log(response);
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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Login;
  