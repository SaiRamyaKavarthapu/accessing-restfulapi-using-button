
const initialState={
    data:[]
}

const ListReducer = (state=initialState,{payload, type})=>{
    switch(type){
    case "FETCH_SUCCESS":
        return{
        ...state,
        data:payload
        }
        default: return state;


    }
}
export default ListReducer;