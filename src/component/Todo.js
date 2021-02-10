import React, {Component} from 'react';
class Todo extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
    userInput :" ", 
    } 
  } 
 
render(){
    const {userInput} = this.state 
    return( 
     
     <div>
   <input placeholder="enter task" type="text" value={userInput} onChange={e=> this.setState({userInput:e.target.value})} />
         <button onClick={()=> {
             this.props.addItem(userInput);
             this.setState({userInput:""})
             }}>add</button>
     
     </div>
     
    ); 
  }
}


  export default Todo;