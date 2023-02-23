import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/usersReducer";
import mySkillsReducer from "../reducers/mySkillsReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import experiencesReducer from "../reducers/experienceReducer";
import postsReducer from "../reducers/postsReducer";

const persistConfig = {
  storage: storage,
  key: "root",
};
const combinedReducer = combineReducers({
  exps: experiencesReducer,
  mySkills: mySkillsReducer,
  users: usersReducer,

  posts: postsReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
  },
});
const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistedStore };
