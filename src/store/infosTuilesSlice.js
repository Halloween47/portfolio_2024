import { createSlice } from "@reduxjs/toolkit";

const infosTuilesSLice = createSlice({
    name: "tuilesInfos",
    initialState: {
        titre: '',
        description: '',
        link: '',
        mockup: ''
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
        }
    }
})

export const {setTitre, setDescription, setLink, setMockup } = infosTuilesSLice.actions;
export default infosTuilesSLice.reducer;