import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminLogin = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const adminLogin = async (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!data.email || !data.password) {
      toast.error('Email and Password are required');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/login-admin',
        data,
        { withCredentials: true }
      );

      console.log('Admin Login successful', response.data);

      // Check if the response contains a success message
      if (response.data.success) {
        toast.success('Admin Login Successful. Welcome!');
        // Redirect to the admin dashboard
        history.push('/admin-dashboard');
      } else {
        // Show a generic error toast if the success message is not present
        toast.error('Admin Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Admin Login error', error.message);

      // Check for specific error messages and show corresponding toasts
      if (error.response) {
        const errorMessage = error.response.data.error;

        switch (errorMessage) {
          case 'No admin found':
            toast.error('No admin found. Please check your credentials.');
            break;
          case 'Invalid Email ID':
            toast.error('Invalid Email ID. Please check your email.');
            break;
          case 'Invalid Password':
            toast.error('Invalid Password. Please check your password.');
            break;
          default:
            toast.error('Admin Login failed. Please try again.');
            break;
        }
      } else {
        // Show a generic error toast if the error is not handled specifically
        toast.error('Admin Login failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-5 fw-bolder">Welcome Admin</h1>
            <p className="lead text-center">Enter Your Credentials To Login</p>
            {/* Add your navigation link */}
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">ADMIN LOGIN</h1>
            <form onSubmit={adminLogin}>
              <div className="mb-3">
                <label htmlFor="adminEmail" className="form-label">
                  Admin Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="adminEmail"
                  aria-describedby="emailHelp"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="adminPassword" className="form-label">
                  Admin Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="adminPassword"
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
                  id="rememberMeCheckbox"
                />
                <label
                  className="form-check-label"
                  htmlFor="rememberMeCheckbox"
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

export default AdminLogin;
