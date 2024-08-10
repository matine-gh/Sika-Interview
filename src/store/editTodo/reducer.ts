import { HYDRATE } from 'next-redux-wrapper';
import {EDIT_TODO_FAILURE, EDIT_TODO_INIT, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS} from "@/store/editTodo/action";


const initialState = {
    isDone: false,
    isLoading: false,
    response: '',
    loanData: {},
    hasError: false,
};

export default function editTodoReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case EDIT_TODO_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                loanData: action.data
            }
        case EDIT_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case EDIT_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            }
        case EDIT_TODO_INIT:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: false,
            }
        default:
            return state
    }
}