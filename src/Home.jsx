import Create from "./Create";
import React, { useState } from "react";
import List from "./Imtiaz";


function Home() {
  const [view, setview] = useState("list");

  return (
    <div>
      <h2>Phonebook App</h2>
      <div className="buttons-container">
        <button className="button" onClick={() => setview("list")}>List</button>
        <button className="button create" onClick={() =>setview("create")}>Create</button>
      </div>
      { view=="list"?<List />: <Create />}
    </div>
  );
}
export default Home;
