import React, { useState } from 'react';

const AddTodos = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc){ alert("Title or description missing")}
    // console.log("Title: ", title);
    // console.log("Description: ", desc);
   else{
    addTodo(title,desc);
    setTitle(""); // Clear the input fields after submission
    setDesc("");}
  };

  return (
    <div className='container my-3'>
      <h3 className='text-center'>Add A Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodos;
