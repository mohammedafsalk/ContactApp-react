import React, { useState } from "react";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";

function AddContact({ handler }) {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handler({ ...value, id: Date.now() });
    setValue({
      name: "",
      email: "",
    });
    console.log(value);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={value.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={value.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddContact;
