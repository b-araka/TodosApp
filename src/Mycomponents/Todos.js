import React from 'react'
import Todosublist from '../Mycomponents/Todosublist';
 const Todos = (props) => {
  let mystyle ={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length===0? "No Todos to Display !! You Have Got Everything Done :)":
      props.todos.map((todo)=>{
        return <>
        {/* <h3>incase of any additional adding</h3> */}
        <Todosublist todo={todo} key={todo}  onDelete={props.onDelete}/>
        <hr/>
        </>
      })
    }
     
    </div>
  )
}

export default Todos
