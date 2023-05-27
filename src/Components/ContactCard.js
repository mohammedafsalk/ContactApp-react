import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ users, deleteHandler }) => {
  return (
    <div className="item">
      <div className="content">
        <Link to={`/details/${users.id}`}>
          <div className="header">{users.name}</div>
          <div>{users.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => deleteHandler(users.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
