import React, { useState } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    termsChecked: false,
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      // Check if name, email, and password are provided
      if (!name || !email || !password) {
        toast.error('Name, email, and password are required');
        return;
      }

      const response = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      if (response.data.error) {
        // Registration failed
        toast.error(response.data.error);
      } else {
        // Registration successful
        console.log("Registration successful", response.data);
        setData({});
        toast.success("Registration Successful. Welcome!");
        history.push("/login");
      }
    } catch (error) {
      console.error("Registration error", error.message);
      toast.error("Registration failed. Please try again.");
    }
  };


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder">Hello, Listener</h1>
                        <p className="lead text-center">Enter Your Details To Sign Up</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink
                            to="/login"
                            className="btn btn-outline-light rounded-pill pb-2 w-50"
                        >
                            Login
                        </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">SIGN UP</h1>
                        <form onSubmit={registerUser}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="termsChecked"
                                    checked={data.termsChecked}
                                    onChange={() => setData({ ...data, termsChecked: !data.termsChecked })}
                                />
                                <label className="form-check-label" htmlFor="termsChecked">
                                    I Agree Terms and Conditions
                                </label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
