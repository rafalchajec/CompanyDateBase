import {FETCH_CARS} from "../actions/types";

export default function(state = null,action){

    switch(action.type){
        case FETCH_CARS:
            return action.payload || false;
        default:
            return state;
    }
}