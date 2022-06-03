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
    .then(response =>  {
        if(response.ok){
            return response;
        }
        else 
        {
            var error= new Error('Error ' + response.status + ': '+response.statusText);
            error.response = response;
            throw error;
        }

    
    },
    error => {
        var error_message = new Error(error.message);
        throw error_message;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response =>  {
        if(response.ok){
            return response;
        }
        else 
        {
            var error= new Error('Error' + response.status + ': '+response.statusText);
            error.response = response;
            throw error;
        }

    
    },
    error => {
        var error_message = new Error(error.message);
        throw error_message;
    })


    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));

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
    .then(response =>  {
        if(response.ok){
            return response;
        }
        else 
        {
            var error= new Error('Error' + response.status + ': '+response.statusText);
            error.response = response;
            throw error;
        }

    
    },
    error => {
        var error_message = new Error(error.message);
        throw error_message;
    })

        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
    
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
