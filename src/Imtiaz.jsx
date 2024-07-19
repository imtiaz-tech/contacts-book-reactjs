import react from 'react';
import React, { useState, useEffect } from "react";
import ContactInfo from "./ContactInfo";
import axios from "axios";

function List () {
  const [contacts, setcontacts] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3001/get")
          .then((result) => setcontacts(result.data?.data))
          .catch((err) => console.log(err));
      }, []);
      
    return(
        <div>
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
            <th>Action</th>
          </tr>
          {contacts.map((contact) => (
            <ContactInfo
             // key={contact._id} 
             _id={contact._id}  
              Name={contact.Name}
              PhoneNo={contact.PhoneNo}
              Address={contact.Address}
            />
          ))}
        </table>
      )}
        </div>
    )
}
export default List;