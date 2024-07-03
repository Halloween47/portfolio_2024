import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        aboutState: false,
        aboutMeState: true,
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
        hideAboutMe: (state) => {
            state.aboutState = false;
            state.aboutMeState = false;
            state.certificateState = false;
            state.experiencesState = false;
        },
    }
});

export const { showAboutMe, showCertificate, showExperiences, hideAboutMe } = aboutSlice.actions;
export default aboutSlice.reducer;
