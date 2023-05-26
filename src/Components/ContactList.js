import ContactCard from "./ContactCard";
const ContactList = ({contacts}) => {
  const renderContactList =contacts.map((users) => {
    return <ContactCard users={users}  />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
