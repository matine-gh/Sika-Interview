import { HYDRATE } from 'next-redux-wrapper';
import {
    GET_TODO_HISTORY_FAILURE,
    GET_TODO_HISTORY_LOADING,
    GET_TODO_HISTORY_SUCCESS
} from "@/store/getTODOHistory/action";



const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false,
};

export default function getTodosHistoryReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case GET_TODO_HISTORY_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            }
        case GET_TODO_HISTORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case GET_TODO_HISTORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            }
        default:
            return state
    }
}