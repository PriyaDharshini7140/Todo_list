import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

class View extends Component { 
  render(){
     
      const items = this.props.add.map((e)=>{return (<div key={e.id}>
         <Row> 
	<Col md={{ span: 5, offset: 4 }}> 
         <ListGroup.Item variant="danger" action 
			onClick = { () => {this.props.remove(e.id)} }> 
			 {e.todo}
			</ListGroup.Item> 
            </Col> 
         </Row> 
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
