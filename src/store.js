import { combineReducers, configureStore } from "@reduxjs/toolkit";


import CategoryReducer from './Features/CategorySlicer';

import CartReducer from './Features/CartSlicer'
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import ThemeReducer from "./Features/ThemeSlicer";


const persistConfig = {
    key: 'root',
   storage:storageSession
  }

  const reducers=combineReducers({
    category:CategoryReducer,
    cart:CartReducer,
    theme:ThemeReducer
  })

  const persistedReducer = persistReducer(persistConfig, reducers)

const store=configureStore({
    reducer:persistedReducer
     
    
    
})

export default store;
export const persistor=persistStore(store);