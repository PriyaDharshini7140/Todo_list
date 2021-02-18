import React, {Component} from 'react';
import SimpleModal from './component';
import Todo from './Todo';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { ThemeProvider } from '@material-ui/core';

class List extends Component { 

// updateHandler=(id)=>{
//   console.log(id);
//   const arrCopy = [... this.state.list]
//  arrCopy.forEach((e)=>{
//    if(e.id === id.id){
//      e.todo =id.todo
//    }
//  })
//  this.setState({list:arrCopy})
// }
  
   render(){
   const items= this.props.list.map(((e)=>{return (<div className='todo-row' key={e.id}>
    {e.todo}
    <div className="icons">
      <FontAwesomeIcon className="delete-icon" onClick={()=>{
     this.props.onDeleteTodo(e.id);
   }} icon="trash"></FontAwesomeIcon>
   <SimpleModal update={this.props.onUpdateTodo(e.id)}></SimpleModal>
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
      onUpdateTodo : (id)=>dispatch({
        type:'UPDATE_TODO',
        payload:id
      }),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
