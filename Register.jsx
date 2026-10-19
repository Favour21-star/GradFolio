import "../App.css";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setFormData({
          full_name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage("Could not connect to server");
    }
  }

  return (
    <div className="page">
      <form className="card" onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <p>Start building your professional graduate portfolio.</p>

        <input
          type="text"
          name="full_name"
          placeholder="Full name"
          value={formData.full_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Create Account</button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Register;