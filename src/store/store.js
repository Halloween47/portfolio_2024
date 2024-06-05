import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from './overlaySlice';
import tuilesInfosReducer from './infosTuilesSlice';
import projetReducer from './projetsSlices';

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    tuilesInfos: tuilesInfosReducer,
    projets: projetReducer
  }
});

export default store;
