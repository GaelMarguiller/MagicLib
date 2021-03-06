import {
    GET_LIST_SETS,
    GET_LIST_SETS_FAILED,
    GET_LIST_SETS_SUCCEEDED
} from '../../constants/setsListTypes';

const initialState = {
   setsList: []

};

export default function SetsListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SETS:
            return {
                ...state,
                fetching: action.fetching
            };
        case GET_LIST_SETS_SUCCEEDED:
            return {
                ...state,
                setsList: action.payload,
                fetching: action.fetching
            };
        case GET_LIST_SETS_FAILED:
            return {
                ...state,
                fetching: action.fetching,
                error: action.error
            };
        default:
            return state;
    }
}
