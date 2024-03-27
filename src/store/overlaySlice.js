import { createSlice } from '@reduxjs/toolkit';

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    overlayState: false
  },
  reducers: {
    showOverlay: (state) => {
      state.overlayState = true;
    },
    hideOverlay: (state) => {
      state.overlayState = false;
    },
  }
});

export const { showOverlay, hideOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
