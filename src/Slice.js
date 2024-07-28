import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contacts: [],
  isloading: false,
  error: null,
};

export const addContact = createAsyncThunk("contact/addContact", async () => {
  const res = await axios.post("http://localhost:3001/add");
  const data = await res.data;
  return data;
});

export const editContact = createAsyncThunk("contact/editContact", async () => {
  const res = await axios.patch(
    "http://localhost:3001/update/" + editObject._id
  );
  const data = await res.data;
  return data;
});
export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id) => {
    const res = await axios.delete("http://localhost:3001/delete/" + id);
    const data = await res.data;
    return data;
  }
);

export const GetContact = createAsyncThunk("contact/GetContact", async () => {
  const res = await axios.get("http://localhost:3001/get");
  const data = await res.data;
  return data;
});
 const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(addContact.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isloading = false;
      state.contents = action.payload;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(editContact.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.isloading = false;
      state.contents = action.payload;
    });
    builder.addCase(editContact.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isloading = false;
      state.contents = action.payload.data;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
    builder.addCase(GetContact.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(GetContact.fulfilled, (state, action) => {
      state.isloading = false;
      state.contacts = action.payload.data;
    });
    builder.addCase(GetContact.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message;
    });
  },
});

export default contactSlice.reducer
