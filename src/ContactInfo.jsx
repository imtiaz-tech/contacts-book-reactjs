import react from "react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {GetContact,deleteContact} from './Slice'

function ContactInfo(props) {
  const { _id, Name, PhoneNo, Address,onEditClick } = props;
  const dispatch = useDispatch();


  const handleDelete = async (id) => {
    await dispatch(deleteContact(id));
    dispatch(GetContact())
  };

  return (
    <tr>
      <td>{Name}</td>
      <td>{PhoneNo}</td>
      <td>{Address}</td>
      <td>
        <button className="button" onClick={() => handleDelete(_id)}>
          Delete
        </button>
        <button
          className="button"
          onClick={() => onEditClick(_id, Name, PhoneNo, Address)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ContactInfo;
