import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from './overlaySlice';
import tuilesInfosReducer from './infosTuilesSlice';
import projetReducer from './projetsSlices';
import contactReducer from './contactSlice';
import aboutReducer from './aboutSlice';

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    tuilesInfos: tuilesInfosReducer,
    projets: projetReducer,
    contact: contactReducer,
    about: aboutReducer
  }
});

export default store;
