import React, { useEffect, useState } from "react";
import {BiSolidMessageSquareAdd} from "react-icons/bi"
import Todo from "./Todo";
import {query, collection, onSnapshot, QuerySnapshot,doc,updateDoc, addDoc ,deleteDoc} from "firebase/firestore"
import {db} from "./Firebase"
function App() {
  const[todos , setTodos]=useState([])
  const [input , setInput]=useState('')



//create to do

const createTodo = async(e)=>{


  e.preventDefault(e)
if(input === ""){

  alert('meesha wax ku qor adoo mahadsna')
  return
}

await addDoc(collection(db, 'todos'),{

text:input,
completed:false,

})
setInput('')
}





//read to do
useEffect(()=>{
const q=query(collection(db , 'todos'))
const unsubscribe=onSnapshot(q, (QuerySnapshot) =>{

let todosArr=[]
QuerySnapshot.forEach((doc)=>{

  todosArr.push({...doc.data(), id: doc.id})

});
setTodos(todosArr)

})

return ()=>unsubscribe


},[])





//update to do
 const toggleComplete=async(todo)=>{
await updateDoc(doc(db, 'todos', todo.id),{
completed:!todo.completed


})


 }


//delete to do
 const deletTodo=async(id)=>{

await deleteDoc(doc(db, "todos", id))

 }






  return (
    <div className=" h-screen py-6 w-full bg-gradient-to-r from-[#2F80ED]   to-[#2F80ED]   ">
    <div className=" bg-slate-200 w-full max-w-[500px] rounded-xl p-4  m-auto   ">

<h1 className=" text-3xl font-bold  text-center  p-2  text-gray-600">To do APP </h1>

<form onSubmit={createTodo}  className=" flex justify-between ">
<input value={input} onChange={(e)=>setInput(e.target.value)} className=" w-full  text-2xl p-2 border outline-none" type="text" placeholder="Add To " />
<button className=""> <BiSolidMessageSquareAdd onClick={createTodo} className="text-red-700" size={44}/>  </button>

</form>

<ul>

{
todos.map((todo, index)=>(

<Todo key={index} todo={todo} toggleComplete={toggleComplete} deletTodo={deletTodo}/>

))

}



</ul>

{todos.length <1 ? null : (<p className=" text-center p-2 ">{`you have ${todos.length} todos`}</p>)}




    </div>




    </div>
  );
}

export default App;
