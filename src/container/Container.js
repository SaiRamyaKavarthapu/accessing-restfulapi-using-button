
import { connect } from "react-redux";
import List from "../components/list";
import getList from "../actions/action-get-list";


export const mapToProps = (state) =>{
    return{
     data:state.data
    }
}

export const mapDispatchProps = (dispatch) =>({
   
        getList:()=>dispatch(getList())
  
})
export default connect(mapToProps, mapDispatchProps)(List);