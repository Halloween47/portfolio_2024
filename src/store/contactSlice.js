import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactState: false
  },
  reducers: {
    showContact: (state) => {
      state.contactState = true;
    },
    hideContact: (state) => {
      state.contactState = false;
    },
  }
});

export const { showContact, hideContact } = contactSlice.actions;
export default contactSlice.reducer;
