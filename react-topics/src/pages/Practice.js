import React, { useState } from "react";

const Practice = () => {
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
    } else {
      setErrors(validateError);
    }
  };

  const handleValidation = (formData) => {
    let error = {};
    if (!formData.firstName.trim() === "") {
      error.firstName = "firstName is required";
    }
    if (!formData.lastName.trim() === "") {
      error.lastName = "lastName is required";
    }
    if (!formData.email.trim() === "") {
      error.email = "email is required";
    }
    if (!formData.password.trim() === "") {
      error.password = "password is required";
    }
    if (!formData.phoneNumber.trim() === "") {
      error.phoneNumber = "phoneNumber is required";
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
          </div>
          <div>
            <label>lastName</label>
            <input
              type="text"
              placeholder="lastName"
              onChange={handleInputFied}
              value={formData.lastName}
              name="lastName"
            />
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
          </div>
          <div>
            <label>agree</label>
            <input
              type="checkbox"
              placeholder="agree"
              onChange={handleInputFied}
              value={formData.agree}
              name="agree"
            />
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

export default Practice;
