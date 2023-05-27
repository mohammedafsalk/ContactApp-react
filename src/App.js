import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  const deleteHandler = (id) => {
    const newList = contacts.filter((item) => item.id !== id);
    setContacts(newList);
  };

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/addcontact" element={<AddContact handler={handleAddContact}/>} />
        <Route path="/" element={<ContactList contacts={contacts} handleDelete={deleteHandler} />} />
      </Routes>
    </div>
  );
}

export default App;
