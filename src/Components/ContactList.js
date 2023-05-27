import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, handleDelete }) => {
 
  const renderContactList = contacts.map((users) => {
    return <ContactCard users={users} deleteHandler={handleDelete} />;
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to={"/addcontact"}>
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
