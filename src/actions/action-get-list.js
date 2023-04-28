import axios from "axios";

const getList = ()=> async (dispatch) =>{
axios .get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            dispatch(getData(response.data))
        
        }
    )
 


}
const getData= (result) => {
    return {
        type:'FETCH_SUCCESS',
        payload:result
    }
}

export default getList;