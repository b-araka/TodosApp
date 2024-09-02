import React from 'react'

const Todosublist = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger' onClick={()=>onDelete(todo)}>DELETE</button>

    </div>
  )
}

export default Todosublist
