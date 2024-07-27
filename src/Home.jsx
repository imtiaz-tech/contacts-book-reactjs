import Create from "./Create";
import React, { useState } from "react";
import List from "./List";
import axios from "axios";

function Home() {
  const [view, setview] = useState("list");
  const [editObject, setEditObject] = useState({});

  const onEditClick = (_id, Name, PhoneNo, Address) => {
    setEditObject({ _id, Name, PhoneNo, Address });
    setview("create");
  };

  

  return (
    <div>
      <h2>Phonebook App</h2>
      <div className="buttons-container">
        <button className="button" onClick={() => setview("list")}>
          List
        </button>
        <button
          className="button create"
          onClick={() => {
            setview("create");
            setEditObject({});
          }}
        >
          Create
        </button>
      </div>
      {view == "list" ? (
        <List
          onEditClick={onEditClick}
        />
      ) : (
        <Create
          setview={setview}
          editObject={editObject}
          setEditObject={setEditObject}
        />
      )}
    </div>
  );
}
export default Home;
