import React, {Component} from 'react';
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
       <div>
      <input className="todo-input edit" value={userInput} onChange={this.handleChange }></input>
    <button className="todo-button edit"  onClick={()=> {
             this.props.addItem(userInput);
             this.setState({userInput:""})
             }}>addItem</button>

</div>
     
    ); 
  }
}


  export default Todo;