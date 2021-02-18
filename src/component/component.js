import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Modal from '@material-ui/core/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor:"rgb(87, 216, 13)",
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Update,setUpdate]=useState({id:props.id,todo:props.todo});
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(Update);

 const button=(<Button className='todo-button' onClick={()=>{props.update(Update)}}>update</Button>)

  const body = (
    <div style={modalStyle} className="todo-modal">
      <h2 id="simple-modal-title">Enter to edit</h2>
      <p id="simple-modal-description">
       <input className="todo-input edit" onChange={(e)=> setUpdate({id:props.id,todo:e.target.value})}></input>
      </p>
      {button}
    </div>
  );
 
const pen=(<div>
     <FontAwesomeIcon className="edit-icon" onClick={handleOpen} icon="edit"></FontAwesomeIcon>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  </div>);
  return (
    <div>
   {pen}
   {pen.body}
</div>
  );
}