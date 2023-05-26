import React from "react";

const ContactCard = ({users}) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{users.name}</div>
        <div>{users.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

export default ContactCard;