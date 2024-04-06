import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from './overlaySlice';
import tuilesInfosReducer from './infosTuilesSlice';

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    tuilesInfos: tuilesInfosReducer
  }
});

export default store;
