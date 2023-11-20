import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { NavLink, useHistory } from "react-router-dom"; // Import useHistory

const Login = () => {
  const history = useHistory(); // Create a history object

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!data.email && !data.password) {
      toast.error("Email and Password are required");
      return;
    }

    // Check if email is empty
    if (!data.email) {
      toast.error("Email is required");
      return;
    }

    // Check if password is empty
    if (!data.password) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data,
        { withCredentials: true }
      );

      console.log("Login successful", response.data);
      // Check if the response contains a success message
      if (response.data.success) {
        toast.success(`Login Successful! Welcome!`);
        // Redirect to PodcastList.jsx
        history.push("/podcasts");
      } else {
        // Show a generic error toast if the success message is not present
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error", error.message);

      // Check for specific error messages and show corresponding toasts
      if (error.response) {
        const errorMessage = error.response.data.error;

        switch (errorMessage) {
          case "No user found":
            toast.error("No user found. Please check your credentials.");
            break;
          case "Invalid Email ID":
            toast.error("Invalid Email ID. Please check your email.");
            break;
          case "Invalid Password":
            toast.error("Invalid Password. Please check your password.");
            break;
          default:
            toast.error("Login failed. Please try again.");
            break;
        }
      } else {
        // Show a generic error toast if the error is not handled specifically
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-5 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">
              Enter Your Credentials To Login
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50">
              Sign Up
            </NavLink>
  
            
            {/* Add your navigation link */}
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form onSubmit={loginUser}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label"
                  htmlFor="exampleCheck1"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4 rounded-pill"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
