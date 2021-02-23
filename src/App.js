import './App.css';
import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import Todo from './component/Todo';
import {BrowserRouter, Route} from "react-router-dom";
import Router from './component/Router';
library.add(faTrash)
library.add(faEdit)

class App extends Component { 
  render(){
   
    return( 
      <div className="todo-app">
        <BrowserRouter>
        <h1>TODO LIST</h1>
    <Route path="/" exact render={(props)=><Todo {...props}/>}/>
    <Route path="/edit" exact render={(props)=><Router {...props}/>}/>
      
     </BrowserRouter>
    </div>     
    ); 
  }
}


  export default App;



