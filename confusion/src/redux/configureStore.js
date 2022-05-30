/* import {createStore} from 'redux'; */
import {combineReducers, createStore,applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
// import { Reducer, initialState } from './reducer'
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}