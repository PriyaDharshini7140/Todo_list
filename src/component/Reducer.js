const initialState={
    list:[],
}
const reducer=(state=initialState,action)=>{
    if(action.type === 'ADD_TODO'){
          return{...state,
            list:[...state.list,action.payload],
        }
    }
    else if(action.type === 'DELETE_TODO'){
          return{...state,
            list:state.list.filter((e)=>e.id !== action.payload)}
    }
    return state;
};
export default reducer;