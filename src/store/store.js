import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from './overlaySlice';
import tuilesInfosReducer from './infosTuilesSlice';
import projetReducer from './projetsSlices';
import contactReducer from './contactSlice';

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    tuilesInfos: tuilesInfosReducer,
    projets: projetReducer,
    contact: contactReducer
  }
});

export default store;
