import {TODOInterface} from "@/app/components/TODOlist/todo.intrface";
export const CREATE_TODO_LOADING = 'CREATE_TODO_LOADING';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';
export const CREATE_TODO_INIT = 'CREATE_TODO_INIT';

export const createTodoLoading = (data: TODOInterface) => ({
    type: CREATE_TODO_LOADING,
    data
})
export const createTodoSuccess = () => ({
    type: CREATE_TODO_SUCCESS
})
export const createTodoFailure = () => ({
    type: CREATE_TODO_FAILURE,
})
export const createTodoInit = () => ({
    type: CREATE_TODO_INIT
})