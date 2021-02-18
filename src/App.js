import './App.css';
import React, {Component} from 'react';
import List from './component/List';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import SimpleModal from './component/component';
import Todo from './component/Todo';

library.add(faTrash)
library.add(faEdit)

class App extends Component { 
  render(){
   
    return( 
      <div className="todo-app">
        <h1>TODO LIST</h1>
    <Todo></Todo>
     <List></List> 
    </div>     
    ); 
  }
}


  export default App;



