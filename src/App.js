import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(contacts);
  });

  return (
    <div className="ui container">
      <Header />
      <AddContact handler={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
