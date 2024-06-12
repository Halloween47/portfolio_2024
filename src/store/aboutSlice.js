import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        aboutState: false,
        aboutMeState: false,
        certificateState: false,
        experiencesState: false
    },
    reducers: {
        showAboutMe: (state) => {
            state.aboutState = true;
            state.aboutMeState = true;
            state.certificateState = false;
            state.experiencesState = false;
        },
        showCertificate: (state) => {
            state.aboutState = true;
            state.aboutMeState = false;
            state.certificateState = true;
            state.experiencesState = false;
        },
        showExperiences: (state) => {
            state.aboutState = true;
            state.aboutMeState = false;
            state.certificateState = false;
            state.experiencesState = true;
        },
    }
});

export const { showAboutMe, showCertificate, showExperiences } = aboutSlice.actions;
export default aboutSlice.reducer;
