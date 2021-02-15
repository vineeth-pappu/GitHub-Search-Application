import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer, { RootState } from './reducers'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use,
    blacklist: [], // blacklist specific states
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
    persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
    applyMiddleware() // add any middlewares here
)

const persistor = persistStore(store);

export { store, persistor }

