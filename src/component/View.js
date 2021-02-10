import React, {Component} from 'react';
import './View.css';
import Button from 'react-bootstrap/Button'; 


class View extends Component { 
  render(){
     const item = this.props.add;
      const items = item.map((e)=>{return (<div className="view" key={e.id}>
        <p>
       <input type="text" id={e.id} value={e.todo} onChange={(a)=>{this.props.update(e.id,a.target.value)}}/>
       <Button variant="secondary" onClick={()=>{this.props.remove(e.id)}}>Delete</Button>
           </p>
   </div>)
      })
    return( 
      <div>
        <center>
       {items}
      </center>
      </div>
    ); 
  }
}


  
export default View;
