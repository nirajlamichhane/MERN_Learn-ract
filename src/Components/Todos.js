import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <div className='container'>
      <h3>To-Do List</h3>
      {/* <h4>
        {props.todos[0]}
      </h4> */}
      <Todo click={()=>console.log("clickd")} todo ={props.todos}/>
    </div>
  )
}
