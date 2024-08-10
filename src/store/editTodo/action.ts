import {TODOInterface} from "@/app/components/TODOlist/todo.intrface";
export const EDIT_TODO_LOADING = 'EDIT_TODO_LOADING';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const EDIT_TODO_FAILURE = 'EDIT_TODO_FAILURE';
export const EDIT_TODO_INIT = 'EDIT_TODO_INIT';

export const editTodoLoading = (data: TODOInterface) => ({
    type: EDIT_TODO_LOADING,
    data
})
export const editTodoSuccess = () => ({
    type: EDIT_TODO_SUCCESS
})
export const editTodoFailure = () => ({
    type: EDIT_TODO_FAILURE,
})
export const editTodoInit = () => ({
    type: EDIT_TODO_INIT
})