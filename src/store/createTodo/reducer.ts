import { HYDRATE } from 'next-redux-wrapper';
import {
    CREATE_TODO_FAILURE,
    CREATE_TODO_INIT,
    CREATE_TODO_LOADING,
    CREATE_TODO_SUCCESS
} from "@/store/createTodo/action";


const initialState = {
    isDone: false,
    isLoading: false,
    response: '',
    loanData: {},
    hasError: false,
};

export default function createTodoReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case CREATE_TODO_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                loanData: action.data
            }
        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case CREATE_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            }
        case CREATE_TODO_INIT:
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