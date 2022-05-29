// import { DISHES } from "../shared/dishes";
import * as ActionTypes from './ActionTypes';

export const Dishes = (state= {
 isLoading: true,
 error_message: null,
 dishes: []
    },action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, error_message: null,dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, error_message: null,dishes: []}
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, error_message:action.payload,dishes: []}

        default: return state;
    }
}