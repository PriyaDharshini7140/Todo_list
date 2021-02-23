import React from 'react'

export default function Router(props) {
    console.log(props.data);
    return (
        <div>
           <input className="todo-input edit" ></input>
            <button className="todo-button edit">editItem</button>
        </div>
    )
}
