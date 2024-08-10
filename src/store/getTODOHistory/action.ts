import {TODOInterface} from "@/app/components/TODOlist/todo.intrface";

export const GET_TODO_HISTORY_LOADING = 'GET_TODO_HISTORY_LOADING';
export const GET_TODO_HISTORY_SUCCESS = 'GET_TODO_HISTORY_SUCCESS';
export const GET_TODO_HISTORY_FAILURE = 'GET_TODO_HISTORY_FAILURE';

export const getTodosLoading = () => ({
    type: GET_TODO_HISTORY_LOADING,
})
export const getTodosSuccess = (response: TODOInterface) => ({
    type: GET_TODO_HISTORY_SUCCESS,
    response: response
})
export const getTodosFailure = () => ({
    type: GET_TODO_HISTORY_FAILURE,
})