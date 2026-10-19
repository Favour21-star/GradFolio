import "../App.css";
import { useState } from "react";

function ProfileBuilder() {
  const [cvName, setCvName] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    qualification: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    skills: "",
    project_name: "",
    project_description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setCvName(file.name);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) setCvName(file.name);
  }

  async function handleSave(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setMessage("Please login first");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          ...formData,
        }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setFormData({
          title: "",
          qualification: "",
          email: "",
          phone: "",
          location: "",
          bio: "",
          skills: "",
          project_name: "",
          project_description: "",
        });

        setCvName("");
      }
    } catch (error) {
      setMessage("Could not connect to server");
    }
  }

  return (
    <div className="builder-page">
      <div className="builder-header">
        <h1>Build Your Portfolio</h1>
        <p>Fill in your details and upload your CV.</p>
      </div>

      <form className="builder-form" onSubmit={handleSave}>
        <input
          type="text"
          name="title"
          placeholder="Professional Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="qualification"
          placeholder="Qualification e.g. Diploma in IT Software Development"
          value={formData.qualification}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location e.g. Johannesburg, South Africa"
          value={formData.location}
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="Short Bio"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>

        <input
          type="text"
          name="skills"
          placeholder="Skills e.g. React, Java, SQL"
          value={formData.skills}
          onChange={handleChange}
        />

        <input
          type="text"
          name="project_name"
          placeholder="Project Name"
          value={formData.project_name}
          onChange={handleChange}
        />

        <textarea
          name="project_description"
          placeholder="Project Description"
          value={formData.project_description}
          onChange={handleChange}
        ></textarea>

        <div
          className="drop-zone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <p>Drag & drop your CV here</p>
          <span>PDF or DOCX only</span>

          <label className="upload-btn">
            Browse File
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              hidden
            />
          </label>

          {cvName && <strong>{cvName}</strong>}
        </div>

        <button type="submit">Save Portfolio</button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default ProfileBuilder;