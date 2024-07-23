import React, { useState, useEffect } from "react";
import axios from "axios";

function Create(props) {
  const { getContacts, setview, editObject, setEditObject } = props;

  const [Name, setName] = useState("");
  console.log("🚀 ~ Create ~ Name:", Name)
  const [PhoneNo, setPhoneNo] = useState("");
  const [Address, setAddress] = useState("");



  useEffect(() => {
    setName(editObject.Name);
    setPhoneNo(editObject.PhoneNo);
    setAddress(editObject.Address);
  }, [editObject]);



  const handleAdd = () => {
    if (editObject._id) {
      axios
        .patch("http://localhost:3001/update/" + editObject._id, {
          Name: Name,
          PhoneNo: PhoneNo,
          Address: Address,
        })
        .then((result) => {
          getContacts();
          setview("list");
          setEditObject({});
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:3001/add", {
          Name: Name,
          PhoneNo: PhoneNo,
          Address: Address,
        })
        .then((result) => {
          getContacts();
          setview("list");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <h4>Name</h4>
      <input
        type="text"
        name="Name"
        placeholder="Enter Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <h4>PhoneNo</h4>
      <input
        type="text"
        name="PhoneNo"
        placeholder="Enter Phone No"
        value={PhoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <br />
      <h4>Address</h4>
      <input
        type="text"
        name="Address"
        placeholder="Enter Address"
        value={Address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />
      <button className="button" type="button" onClick={() => handleAdd()}>
        submit
      </button>
    </div>
  );
}
export default Create;
