import react from 'react'
import axios from "axios";
import React, { useState } from "react";


function ContactInfo(props){
        const{ _id,Name,PhoneNo,Address}=props;
       const handleDelete = (id) => {
        axios
          .delete("http://localhost:3001/delete/" + id)
          .then((result) => {
            location.reload();
          })
          .catch((err) => console.log(err));
      };
        
    return(
        <tr>
          <td>{Name}</td>
          <td>{PhoneNo}</td>
          <td>{Address}</td>
          <td><button className="button" onClick={() => handleDelete(_id)}>Delete</button>
          <button className='button'>Edit</button></td>
          
        </tr>
)
}

export default ContactInfo;