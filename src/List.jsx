import React, { useEffect } from "react";
import ContactInfo from "./ContactInfo";

function List(props) {
  const { getContacts, setcontacts, contacts } = props;

  useEffect(() => {
    getContacts();
  }, []);

  return (
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
              _id={contact._id}
              Name={contact.Name}
              PhoneNo={contact.PhoneNo}
              Address={contact.Address}
              getContacts={getContacts}
              setcontacts={setcontacts}
            />
          ))}
        </table>
      )}
    </div>
  );
}
export default List;
