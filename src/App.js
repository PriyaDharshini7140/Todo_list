import './App.css';
import React, {Component} from 'react';
import Card from 'react-bootstrap/Card' 
import List from './component/List';


class App extends Component { 
  render(){
   
    return( 
      <div>
    <center>
   <Card border="dark" style={{ width: '20rem' ,backgroundColor:'rgb(37, 214, 191)'}}>
    <Card.Header>TODO List</Card.Header>
      <Card.Body>
        <Card.Title>ADD TASK</Card.Title>
        <List></List> 
      </Card.Body>
    </Card>
    
    </center>
    </div>     
    ); 
  }
}


  export default App;



