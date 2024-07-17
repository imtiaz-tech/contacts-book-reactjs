import Create from "./Create";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactInfo from "./ContactInfo";
import { BsFillTrashFill } from "react-icons/bs";
function Home() {
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setcontacts(result.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Phonebook App</h2>
      <Create />
      {contacts.length === 0 ? (
        <div>
          <h2>No Contacts</h2>
        </div>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Phoneno</th>
            <th>Address</th>
          </tr>
          {contacts.map((contact) => (
            <ContactInfo
              Name={contact.Name}
              PhoneNo={contact.PhoneNo}
              Address={contact.Address}
            />
          ))}
        </table>
      )}
    </div>
  );
}
export default Home;
