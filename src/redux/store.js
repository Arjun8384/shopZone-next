import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

import {
  persistReducer,
  persistStore,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import filterReducer from './slices/filterSlice'
import themeReducer from './slices/themeSlice'
import productReducer from './slices/productSlice'

const persistConfig = {
  key: 'buyswift',
  storage,
  whitelist: [
    'cart',
    'wishlist',
    'theme',
  ],
}

const rootReducer =
  combineReducers({
    cart: cartReducer,
    wishlist:
      wishlistReducer,
    filters: filterReducer,
    theme: themeReducer,
    products:
      productReducer,
  })

const persistedReducer =
  persistReducer(
    persistConfig,
    rootReducer
  )

export const store =
  configureStore({
    reducer:
      persistedReducer,

    middleware: (
      getDefaultMiddleware
    ) =>
      getDefaultMiddleware({
        serializableCheck:
          false,
      }),
  })

export const persistor =
  persistStore(store)