import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//Remaining part of displaying the error message  and so on already been set up in our application. So, we need fix here  Fetchrequest to the server.

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
    return fetch(baseUrl+'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
    // setTimeout(() =>  {
    //     dispatch(addDishes(DISHES));
    // },2000);
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

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (error_message) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: error_message
});

export const addComments = (comments)=> ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch)=> {
    dispatch(promosLoading());
    return fetch(baseUrl+'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
    
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (error_message) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: error_message
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
