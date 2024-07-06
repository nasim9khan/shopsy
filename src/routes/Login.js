import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      fname: !formData.fname,
      lname: !formData.lname,
      email: !formData.email,
      password: !formData.password,
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);
    if (isValid) {
      // Handle form submission
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              className={`form-control ${errors.fname ? "is-invalid" : ""}`}
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && (
              <div className="invalid-feedback">First Name is required.</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              className={`form-control ${errors.lname ? "is-invalid" : ""}`}
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.lname && (
              <div className="invalid-feedback">Last Name is required.</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">Email is required.</div>
            )}
          </div>
          <div className="col-12">
            <label htmlFor="pasd">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">Password is required.</div>
            )}
          </div>
          <div className="col-12 text-center">
            <input
              type="submit"
              className="btn btn-secondary m-2 p-2 btn-custom"
            />
            <input
              type="reset"
              className="btn btn-secondary m-2 p-2 btn-custom"
              onClick={() =>
                setFormData({ fname: "", lname: "", email: "", password: "" })
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
