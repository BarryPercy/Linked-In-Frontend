import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import experiencesRecuder from "../reducers/experienceReducer";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const combinedReducer = combineReducers({
  exp: experiencesRecuder,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
