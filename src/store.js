import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './Slice'

export const store = configureStore({
    reducer:{
        contacts: contactSlice,
    }
})