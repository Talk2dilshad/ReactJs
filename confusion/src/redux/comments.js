import * as ActionTypes from './ActionTypes';

export const Comments = (state= {
    error_message: null,
    comments: []
},action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, error_message: null,comments: action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, error_message:action.payload}

        case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        return {...state, comments: state.comments.concat(comment)};
        
        default: return state;
    }
}