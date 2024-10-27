
const initialState ={};
const reducer =(state=initialState, action)=>{
    switch(action.type){
        case "add" :
            return {...action.payload};
        default : return state
    }
    return state;
}
export default reducer;
