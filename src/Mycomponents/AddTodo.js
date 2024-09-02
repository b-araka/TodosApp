import React, {useState} from 'react'

const Addtodo = (props) => {
  const [title,setTitle] =useState("");
  const [desc,setdesc] =useState("");

  const submit = () => {

  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
        
          <label for="title" className="form-label">Todo Title</label>
          <input type="text" value="title" class="form-control" id="title" aria-describedby="emailHelp"></input>
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">Todo Description</label>
          <input type="text" value="desc" class="form-control" id="desc"></input>
        </div>
         
        <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}

export default Addtodo
