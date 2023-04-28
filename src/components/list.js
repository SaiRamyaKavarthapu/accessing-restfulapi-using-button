import React from 'react';


class List extends React.Component{

    handleClick(e){
        e.preventDefault();
        this.props.getList();

    }


    render(){
        return(
            <div>

                <button onClick={(e)=>this.handleClick(e)}>submit</button>
                <br/>
                <br/>
              {this.props.data.map((item)=><li>{item.title}</li>)}
            </div>
        )
    }

}
export default List;