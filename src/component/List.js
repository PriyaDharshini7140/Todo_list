import React, {Component} from 'react';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class List extends Component { 
   render(){
    console.log(this.props.history);
   const items= this.props.list.map(((e)=>{return (<div className='todo-row' key={e.id}>
    {e.todo}
    <div className="icons">
      <FontAwesomeIcon className="delete-icon" onClick={()=>{
     this.props.onDeleteTodo(e.id);
   }} icon="trash"/>
   <FontAwesomeIcon className="edit-icon" onClick={()=>this.props.history.push({pathname:"/edit",state:e.id})} icon="edit"/>
   </div>
 </div>)
  })
)
    return( 
      <div>
        <center>
        {items}
        </center>
      </div>
    ); 
  }
}
const mapStateToProps=(state)=>{
  console.log(state);
  return{
        list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      onDeleteTodo : (id)=>dispatch({
        type:'DELETE_TODO',
        payload:id
      }),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
