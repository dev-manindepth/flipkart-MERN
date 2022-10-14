
import { createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProductsReducer } from './reducers/productReducer';


const rootReducer=combineReducers({
    getProducts:getProductsReducer
})

const middleware=[thunk];

const store=createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(...middleware))
)

export default store;