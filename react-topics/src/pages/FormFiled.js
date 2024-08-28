import React, { useState } from "react";

const FormFiled = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputFied = (e) => {
    const { name, type, checked, value } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = handleValidation(formData);
    if (Object.keys(validateError).length === 0) {
      setSubmitted(formData);
      setErrors({}); // Clear any previous errors
    } else {
      setErrors(validateError);
    }
  };

  const handleValidation = (formData) => {
    let error = {};
    if (formData.firstName.trim() === "") {
      error.firstName = "First name is required";
    }
    if (formData.lastName.trim() === "") {
      error.lastName = "Last name is required";
    }
    if (formData.email.trim() === "") {
      error.email = "Email is required";
    }
    if (formData.password.trim() === "") {
      error.password = "Password is required";
    }
    if (formData.phoneNumber.trim() === "") {
      error.phoneNumber = "Phone number is required";
    }
    if (!formData.agree) {
      error.agree = "You must agree to the terms";
    }

    return error;
  };
  return (
    <div>
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <div>
            <label>firstName</label>
            <input
              type="text"
              placeholder="firstName"
              onChange={handleInputFied}
              value={formData.firstName}
              name="firstName"
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label>lastName</label>
            <input
              type="text"
              placeholder="lastName"
              onChange={handleInputFied}
              value={formData.lastName}
              name="lastName"
            />{" "}
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <label>email</label>
            <input
              type="mail"
              placeholder="email"
              onChange={handleInputFied}
              value={formData.email}
              name="email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="password"
              onChange={handleInputFied}
              value={formData.password}
              name="password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <label>phoneNumber</label>
            <input
              type="number"
              placeholder="phoneNumber"
              onChange={handleInputFied}
              value={formData.phoneNumber}
              name="phoneNumber"
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>
          <div>
            <label>agree</label>
            <input
              type="checkbox"
              placeholder="agree"
              onChange={handleInputFied}
              value={formData.agree}
              name="agree"
            />{" "}
            {errors.agree && <p>{errors.agree}</p>}
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
        <div>
          {submitted && (
            <table>
              <thead>
                <tr>
                  <th>Filed</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(submitted).map(([key, value]) => {
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value.toString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormFiled;
