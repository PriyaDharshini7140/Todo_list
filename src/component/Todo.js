import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './List';
class Todo extends Component { 
  
  constructor(props) { 
    super(props); 
    this.state = { 
    userInput :" ", 
    } 
  } 
  handleChange = e => {
    this.setState({userInput:e.target.value})
  };

render(){
    const {userInput} = this.state;
    return( 
      <>
       <div>
      <input className="todo-input edit" value={userInput} onChange={this.handleChange}></input>
    <button className="todo-button edit"  onClick={()=>{
      // eslint-disable-next-line no-lone-blocks
      {this.props.onAddTodo(userInput);
        this.setState({userInput:""})}
    }}>addItem</button>
    <List history={this.props.history}/>
</div>

</>   
    ); 
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      onAddTodo : (user)=>dispatch({
        type:'ADD_TODO',
        payload:{
          id:Math.round(Math.random()*1000),
          todo:user
        }
      })
  }
}

export default connect(null,mapDispatchToProps)(Todo);