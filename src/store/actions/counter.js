import * as ActionTypes from "./actionsTypes"

export const increment=()=>{
    return{
        type:ActionTypes.INCREMENT
    }
};

export const decrement=()=>{
    return{
        type:ActionTypes.DECREMENT
    }
};

export const add=(value)=>{
    return{
        type:ActionTypes.ADD,
        val:value
    }
};

export const substract=(value)=>{
    return{
        type:ActionTypes.SUBSTRACT,
        val:value
    }
};