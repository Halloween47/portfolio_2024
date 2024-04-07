import { createSlice } from "@reduxjs/toolkit";

const infosTuilesSLice = createSlice({
    name: "tuilesInfos",
    initialState: {
        titre: '',
        description: '',
        link: '',
        mockup: '',
        tech:''
    },
    reducers: {
        setTitre: (state, action) => {
            state.titre = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setLink: (state, action) => {
            state.link = action.payload;
        },
        setMockup: (state, action) => {
            state.mockup = action.payload;
        },
        setTech: (state, action) => {
            state.tech = action.payload;
        }
    }
})

export const {setTitre, setDescription, setLink, setMockup, setTech } = infosTuilesSLice.actions;
export default infosTuilesSLice.reducer;