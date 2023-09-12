import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your User Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Your Password</label>
        <input type="password"></input>
        <label>Confirm Your Password</label>
        <input type="password"></input>

        <button className="btn2">SIGN UP</button>
      </form>
    </div>
  );
};

export default Form;
