import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import currenciesSlice from './slices/currenciesSlice';


const rootReducer = combineReducers({
  currencies: currenciesSlice,
},
);
export type RootState = ReturnType <typeof rootReducer>
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);