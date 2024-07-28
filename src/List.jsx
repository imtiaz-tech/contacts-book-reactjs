import React, { useEffect } from "react";
import ContactInfo from "./ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import {GetContact} from './Slice'

function List(props) {
  const { getContacts, setcontacts, onEditClick,  } = props;

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(GetContact());
  }, []);
  const contacts = useSelector((state) => state.contacts.contacts);
  const isloading = useSelector((state) => state.contacts.isloading);
  const error = useSelector((state) => state.contacts.error);
  
  if (isloading) {
    return "loading...";
  }

  if (error) {
    return "error";
  }
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
              key={contact.id}
              _id={contact._id}
              Name={contact.Name}
              PhoneNo={contact.PhoneNo}
              Address={contact.Address}
              getContacts={getContacts}
              setcontacts={setcontacts}
              onEditClick={onEditClick}
            />
          ))}
        </table>
      )}
    </div>
  );
}
export default List;
