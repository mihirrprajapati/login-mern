import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const validUser = () => {
    axios
      .post("http://localhost:3001/reg/login", { email, password: pass })
      .then((data) => {
        console.log(data);
        if (data.data.isvalid) {
          navigate("/home");

          sessionStorage.setItem("user", data.data.isvalid);
        } else {
          alert("Invalid");
        }
      })
      .catch((err) => console.log(err));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    validUser();
  };

  return (
    <>
      <div className="container my-5">
        <form onSubmit={(e) => formSubmit(e)}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
