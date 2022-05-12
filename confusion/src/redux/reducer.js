/* this is where we will setup our state... */

import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import {PROMOTIONS} from '../shared/promotion';
import {LEADERS} from '../shared/leaders';
// javascript obj
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState,action) => {
    return state;
};