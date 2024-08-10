import { takeLatest, put, call } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {EDIT_TODO_LOADING, editTodoFailure, editTodoSuccess} from "@/store/editTodo/action";

function* ApiCall(data: any): Generator<any> {
    try {
        yield call(
            axiosInterceptorInstance.patch,
            `/toDOs/${data.data.id}`,
            data.data,
            {
                timeout: Number(process.env.API_TIME_OUT),
            },
        );

        yield put(editTodoSuccess());
    } catch (error: any) {
        yield errorHandling(error, editTodoFailure);
    }
}

export default function* editTodoSaga() {
    yield takeLatest(EDIT_TODO_LOADING, ApiCall);
}