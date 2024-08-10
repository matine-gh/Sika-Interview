import { takeLatest, put, call } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {CREATE_TODO_LOADING, createTodoFailure, createTodoSuccess} from "@/store/createTodo/action";

function* ApiCall(data: any): Generator<any> {
    try {
        yield call(
            axiosInterceptorInstance.post,
            `/toDOs`,
            data.data,
            {
                timeout: Number(process.env.API_TIME_OUT),
            },
        );

        yield put(createTodoSuccess());
    } catch (error: any) {
        yield errorHandling(error, createTodoFailure);
    }
}

export default function* createTodoSaga() {
    yield takeLatest(CREATE_TODO_LOADING, ApiCall);
}