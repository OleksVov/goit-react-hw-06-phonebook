import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {contactsReducer} from './contactSlice';
import { filterReducer } from "./filterSlice";



const persistConfig = {
    key: 'contacts',
    storage,
    // blacklist: ['filter'],
  }
   
  const persistedReducer = persistReducer(persistConfig, contactsReducer)

  export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        filter: filterReducer,
        contacts: persistedReducer,
    },
}) 

export const persistor = persistStore(store);