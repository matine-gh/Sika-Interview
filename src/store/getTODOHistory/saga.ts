
import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/store/axios";
import errorHandling from "@/store/_utils/errorHandling";
import {GET_TODO_HISTORY_LOADING, getTodosFailure, getTodosSuccess} from "@/store/getTODOHistory/action";

function* ApiCall(): Generator<any> {
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            '/toDOs',
            {
                timeout: Number(process.env.API_TIME_OUT),
            });
        yield put(getTodosSuccess(response.data));
    } catch (error: any) {
        yield errorHandling(error, getTodosFailure);
    }
}

export default function* getTODOsHistorySaga() {
    yield takeLatest(GET_TODO_HISTORY_LOADING, ApiCall);
}