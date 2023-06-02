import React from "react";

export default function Todo(props) {
  const buildTodoUI = () => {
    return props.todo.map((e) => (
      <div>
        <h1>{e.title}</h1>
        <p>{e.desc}</p>
        <button onClick={props.click} className="btn btn-sm btn-danger">Delete</button>  
      </div>
    ));
  };

  return <div>{buildTodoUI()}</div>;
}
