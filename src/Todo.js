import React from 'react'
import {BsTrash} from "react-icons/bs"
const style={
    liComplete:`flex justify-between bg-slate-500  p-4 my-2 capitalize `,
    li : `flex justify-between  bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2  cursor-pointer`,
    textComplete: `ml-2  cursor-pointer line-through`,
    button: ` cursor-pointer flex  items-center`

}

const Todo = ({todo , toggleComplete, deletTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li }>

        
    <div className=' flex items-center '>
    <input onChange={()=>toggleComplete(todo)} type='checkbox' checked={todo.completed ? "checked" : ""} />
<p onClick={()=>toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>

    </div>

<button onClick={()=>deletTodo(todo.id)} className=' cursor-pointer flex items-center'><BsTrash size={27}/></button>

    </li>
  )
}

export default Todo