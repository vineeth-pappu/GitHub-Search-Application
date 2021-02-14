import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer, { IRootReducer } from './reducers'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}

// const rootReducer2 = createStore(rootReducer)

// const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const persistedReducer = persistCombineReducers(persistConfig, rootReducer) // create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer2);


const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store);

export { store, persistor }

