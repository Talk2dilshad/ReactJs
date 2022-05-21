import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating , author, comment)=> ({
    type : ActionTypes.ADD_COMMENT,
    payload: {
        dishId : dishId,
        rating : rating,
        author: author,
        comment : comment
    }

});// action object is created 
// action object to be return by action creater .