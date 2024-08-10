import {all} from 'redux-saga/effects';
import getTODOsHistorySaga from "@/store/getTODOHistory/saga";
import createTodoSaga from "@/store/createTodo/saga";
import editTodoSaga from "@/store/editTodo/saga";

function* rootSaga() {
    yield all([
        createTodoSaga(),
        editTodoSaga(),
        getTODOsHistorySaga()
    ]);
}

export default rootSaga;