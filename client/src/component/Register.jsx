import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [course, setCourse] = useState("MCA");
  const [dob, setDob] = useState();

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobby([...hobby, value]);
    } else {
      setHobby(hobby.filter((h) => h !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      gender,
      hobby,
      percentage,
      course,
      dob,
    };
    console.log(formData); // Submit form data here or send it to an API

    axios
      .post("http://localhost:3001/reg/addUser", formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>
      <form className="row g-3 mt-5" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail22" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputEmail22"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            id="flexRadioMale"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="form-check-label ms-2" htmlFor="flexRadioMale">
            Male
          </label>

          <input
            className="form-check-input ms-4"
            type="radio"
            name="gender"
            value="Female"
            id="flexRadioFemale"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="form-check-label ms-2" htmlFor="flexRadioFemale">
            Female
          </label>
        </div>
        <div className="col-md-6">
          <input
            className="form-check-input"
            type="checkbox"
            value="Singing"
            id="hobbySinging"
            name="hobby"
            onChange={handleHobbyChange}
          />
          <label className="form-check-label ms-2" htmlFor="hobbySinging">
            Singing
          </label>

          <input
            className="form-check-input ms-4"
            type="checkbox"
            value="Dancing"
            id="hobbyDancing"
            name="hobby"
            onChange={handleHobbyChange}
          />
          <label className="form-check-label ms-2" htmlFor="hobbyDancing">
            Dancing
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputCourse" className="form-label">
            Course
          </label>
          <select
            id="inputCourse"
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputPercentage" className="form-label">
            Percentage
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPercentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
