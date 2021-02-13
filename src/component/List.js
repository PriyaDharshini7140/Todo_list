import React, {Component} from 'react';
import SimpleModal from './component';
import Todo from './Todo';
import View from './View';

class List extends Component { 
  constructor(props) { 
    super(props); 
    this.state= { 
           list:[],
           
    } 
  } 
  addHandler=(text)=>{ 
    console.log(text);
  const arrCopy = [...this.state.list]
  console.log(arrCopy)
  arrCopy.push({id:Math.round(Math.random()*1000),todo:text})
  this.setState({list:arrCopy,})
};
 removeHandler=(id)=>{ 
    console.log(id);
  const arrCopy = [...this.state.list]
const filter = arrCopy.filter((e)=>e.id !== id)
  this.setState({list:filter})
};
updateHandler=()=>{
  console.log("update");
  
  }
   render(){

    return( 
      <div>
        <center>
         <Todo addItem={this.addHandler}></Todo>
        <View add={this.state.list} remove={this.removeHandler} update={this.updateHandler}></View>
        </center>
      </div>
    ); 
  }
}


  
export default List;
