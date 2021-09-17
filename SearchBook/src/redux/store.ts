import {applyMiddleware, combineReducers, createStore} from "redux";
import {booksReducer} from "./books";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  booksReducer:booksReducer
});
export const store=createStore(rootReducer, applyMiddleware(thunk))