import React, {Component} from 'react';
import {connect} from 'react-redux';
class Router extends Component { 
  
  constructor(props) { 
    super(props); 
    this.state = { 
    userInput :" ", 
    } 
  } 
  handleUpdate=(id,text)=>{
        const arrCopy=[...this.props.list];
        arrCopy.forEach((e)=>{
            if (e.id === id) {
                e.todo =text
            }
        })
         this.props.onUpdateTodo(arrCopy)
       }
  handleChange = e => {
    this.setState({userInput:e.target.value})
  };

render(){
    const {location:{state}}=this.props;
    console.log(state);
    const {userInput} = this.state;
    return( 
       
                 <div>
                    <input className="todo-input edit" onChange={this.handleChange}></input>
                     <button className="todo-button edit"  onClick={()=>{
      // eslint-disable-next-line no-lone-blocks
      {this.handleUpdate(state,userInput)
        this.props.history.goBack()
    }
    }}>update</button>
                    </div>
                
            )  
    
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
      onUpdateTodo : (update)=>dispatch({
        type:'UPDATE_TODO',
        payload:update
      })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Router);
