// AdminAuth.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const AdminAuth = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-3">
            <h1 className="display-5 fw-bolder">Hello, Admin</h1>

            <NavLink
              to="/admin/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
