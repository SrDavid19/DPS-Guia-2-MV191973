import React,{useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
   const[todo, setTodo]=useState({})
   const [todos, setTodos]=useState([

   ])
   const handleChange=e=>setTodo({[e.target.name]:e.target.value})
   const handleClick=e=>{
      if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
         alert('El campo no puede estar vacio')
         return
      }
      setTodos([...todos,todo])
   }

   const deleteTodo= indice => {
      const newTodos=[...todos]
      newTodos.splice(indice, 1)
      setTodos(newTodos)
   }
      return (
             <>
               <form onSubmit={e => e.preventDefault()}>
               <label className='title'>Producto</label><br/>
               <input type="text" name="prod" className='textbox' onChange={handleChange}/>
               <label className='title'>Cantidad</label><br/>
               <input type="text" name="cant" className='textbox' onChange={handleChange}/>
                <button onClick={handleClick}>Agregar</button>
                  </form>
                  {
                     todos.map((value,index) =>(
                        <Todo todo={value.todo} key={index} deleteTodo={deleteTodo}/>
                        ))
                  }
             </>
 )
}
export default Form