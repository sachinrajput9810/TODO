import { useEffect, useState } from "react"
import classes from "./style.module.css"
import ToDoItem from "./components/todo-items"
import ToDoDetails from "./components/todo-details"
import { Skeleton } from "@mui/material"

function App() {

  const [loading , setLoading] = useState(false)
  const [todos , setTodos] = useState([])
  const [error , setError] = useState(null)
  const [todoDetails , setTodoDetails] = useState(null)
  const [openDialog , setOpenDialog] = useState(false)

  useEffect( () => {
    fetchListOfTodos()    
  } , [])

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const response = await fetch("https://dummyjson.com/todos")
      const data = await response.json()
      // console.log(data.todos)
      if(data?.todos && data.todos.length > 0) {
        setTodos(data?.todos)
        setLoading(false)
      } 
      else{
        setTodos([])
        setLoading(false)
        setError("No data found")
      }     
    } 
    catch (error) {
      setError("Something went wrong")
      console.log(error)
    }
  }

  async function fetchDetailsOfCurrentTodo(id){
    try{
      const apiResponse = await fetch('https://dummyjson.com/todos/'+id)
      const details = await apiResponse.json()
      console.log(details)
      if(details){
        setTodoDetails(details)
        setOpenDialog(true)
      } 
      else{
        setTodoDetails(null)
        setOpenDialog(false)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  if(loading) return <Skeleton variant="rectangular" width={650} height={650} />

  return (
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>Simple TODO APP using Material UI</h1>
        <div className={classes.todoItemsWrapper} >
          {
            todos && todos.length > 0 ? todos.map( (todo , index) => <ToDoItem
                                                              fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} 
                                                              key={index} todo={todo}
                                                              />) :  null 
          }
        </div>
        <ToDoDetails
          todoDetails={todoDetails}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          setTodoDetails={setTodoDetails}
        ></ToDoDetails>
      </div>
  )
}

export default App
