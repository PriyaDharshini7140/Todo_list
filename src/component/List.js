import React, {Component} from 'react';
import SimpleModal from './component';
import Todo from './Todo';
import {connect} from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class List extends Component { 
//   constructor(props) { 
//     super(props); 
//     this.state= { 
//            list:[],
           
//     } 
//   } 
//   addHandler=(text)=>{ 
//     console.log(text);
//   const arrCopy = [...this.state.list]
//   console.log(arrCopy)
//   arrCopy.push({id:Math.round(Math.random()*1000),todo:text})
//   this.setState({list:arrCopy,})
// };
//  removeHandler=(id)=>{ 
//     console.log(id);
//   const arrCopy = [...this.state.list]
// const filter = arrCopy.filter((e)=>e.id !== id)
//   this.setState({list:filter})
// };
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
//     const items = this.state.list.map((e)=>{return (<div className='todo-row' key={e.id}>
//       {e.todo}
//       <div className="icons">
//      <FontAwesomeIcon className="delete-icon" onClick={()=>{this.removeHandler(e.id)}} icon="trash"></FontAwesomeIcon>
//      <SimpleModal id={e.id} todo={e.todo} update={this.updateHandler}></SimpleModal>
//      </div>
    
//  </div>)
//     })

    return( 
      <div>
        <center>
        {this.props.list}
        </center>
      </div>
    ); 
  }
}
const mapStateToProps=(state,ownProps)=>{
  console.log(state);
  console.log(ownProps);
  return{
        list:state.list.map(((e)=>{return (<div className='todo-row' key={e.id}>
        {e.todo}
        <div className="icons">
          <FontAwesomeIcon className="delete-icon" onClick={()=>{
         console.log(this.props.onDeleteTodo(e.id));
       }} icon="trash"></FontAwesomeIcon>
       <SimpleModal id={e.id} todo={e.todo} ></SimpleModal>
       </div>
     </div>)
      })
  )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      onDeleteTodo : (eid)=>dispatch({
        type:'DELETE_TODO',
        payload:{
          id:eid,
        }
      }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
