import { createSlice } from '@reduxjs/toolkit';

const projetsSlice = createSlice({
  name: 'projets',
  initialState: {
    projetsState: false
  },
  reducers: {
    showProjets: (state) => {
      state.projetsState = true;
    },
    hideProjets: (state) => {
      state.projetsState = false;
    },
  }
});

export const { showProjets, hideProjets } = projetsSlice.actions;
export default projetsSlice.reducer;
