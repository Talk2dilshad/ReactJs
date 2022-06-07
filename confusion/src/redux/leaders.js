import * as ActionTypes from './ActionTypes';


export const Leaders = (state= {isLoading: true, error_message: null, leaders: []},action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state,isLoading:false,error_message:null,leaders: action.payload};
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading:true, error_message:null,leaders: []};
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading:false, error_message: action.payload, leaders: []};
        
        default: return state;

    }
}