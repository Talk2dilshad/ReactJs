import * as ActionTypes from './ActionTypes';

export const Promotions = (state= {
    isLoading: true,
    error_message: null,
    promotions: [] },action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, error_messagessage: null,promotions: action.payload}
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, error_message: null,promotions: []}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, error_message:action.payload}

        default: return state;
    }
}