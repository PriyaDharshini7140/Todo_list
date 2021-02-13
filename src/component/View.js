import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SimpleModal from './component';


class View extends Component { 
    state={
      value:"",
    }
    
    update=(val)=>{
this.setState({value:val})
    };
    
  render(){
     const item = this.props.add;
      const items = item.map((e)=>{return (<div className='todo-row' key={e.id}>
        {e.todo}
        <div className="icons">
       <FontAwesomeIcon className="delete-icon" onClick={()=>{this.props.remove(e.id)}} icon="trash"></FontAwesomeIcon>
      <SimpleModal val={this.update}></SimpleModal>
       </div>
      
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
