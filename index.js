import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";

console.log(store.getState())

store.dispatch(addTodoActionCreator("buy notes"))

console.log(store.getState().todoState)

store.dispatch(addTodoActionCreator("buy notes"))

console.log(store.getState().todoState)

store.dispatch(addUserActionCreator("John"))

console.log(store.getState().userState)