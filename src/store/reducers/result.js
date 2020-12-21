import * as actionTypes from "../actions/actionsTypes";
const initialState = {

  results:[],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  
      case actionTypes.STORE_RESULT:
        return{
          ...state,
          results:state.results.concat({id:new Date() ,value:action.result}),
        }
        case actionTypes.DELETE_RESULT:
          // const id= 2;
          // const newArray=[...state.results]
          // newArray.splice(id,1);
          const updatedArray=state.results.filter(result=>result.id!==action.resultEleId)
          return{
            ...state,
            results:updatedArray
          }
      
  }
  return state;
  // if(action.type==='INCREMENT'){
  //     return{
  //         counter:state.counter+1
  //     }
  // }
  // if(action.type==='DECREMENT'){
  //     return{
  //         counter:state.counter-1
  //     }
  // }
  // if(action.type==='ADDITION'){
  //     return{
  //         counter:state.counter+action.val
  //     }
  // }
  // if(action.type==='SUBSTRACTION'){
  //     return{
  //         counter:state.counter-action.val
  //     }
  // }
  //return state;
};

export default reducer;
