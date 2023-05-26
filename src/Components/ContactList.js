import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const renderContactList = props.users.map((users) => {
    return <ContactCard users={users} key={users.id} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
