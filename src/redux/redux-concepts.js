import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const addTwo = (v) => v + 2;
const MultiplyTwo = (v) => v * 2;
console.log(MultiplyTwo(addTwo(2)));
