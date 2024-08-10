import { combineReducers } from '@reduxjs/toolkit';
import getTodosHistoryReducer from "@/store/getTODOHistory/reducer";
import createTodoReducer from "@/store/createTodo/reducer";
import editTodoReducer from "@/store/editTodo/reducer";
const rootReducer = combineReducers({

    todosHistory: getTodosHistoryReducer,
    createTodo: createTodoReducer,
    editTodo: editTodoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
