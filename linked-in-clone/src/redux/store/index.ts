import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usersReducer from '../reducers/usersReducer'
import mySkillsReducer from '../reducers/mySkillsReducer'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
  storage: storage,
  key: 'root',
}
const combinedReducer = combineReducers({
    mySkills: mySkillsReducer,
    users: usersReducer,

})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store, persistedStore }