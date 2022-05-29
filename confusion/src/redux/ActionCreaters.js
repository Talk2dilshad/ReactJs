import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

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

export const fetchDishes = () => (dispatch)=> {
    dispatch(dishesLoading(true));
    setTimeout(() =>  {
        dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (error_message) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: error_message
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})