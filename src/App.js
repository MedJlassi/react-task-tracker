import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState,useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  const [showAddForm,setShowAddFrom] = useState(true)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

/** fetching tasks from server */
 const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }

/** fetching individual task from server */
 const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    }

/** function for Adding Task  */
  const addTask = async (task) => {
    const id = tasks.length+1
    const newTask = {id,...task}
    const res = await fetch('http://localhost:5000/tasks',
      {
        method:'POST',
        headers:{
          'Content-Type':'Application/json'
        },
        body:JSON.stringify(newTask)
      }
    )
    const data = await res.json()
    console.log(data)
    setTasks([...tasks,data])
  }

/** function for deleting tasks from the Task Component */
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter( (task) => task.id !== id))
  }

/**Toggling the reminder  */
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const upDTask = {...taskToToggle,reminder:!taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(upDTask)
      }
    )
    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task,reminder : data.reminder} : task ))
  }

/** toggle the visibility of the AddTask */
  const toggleAddForm = () =>{
    setShowAddFrom(!showAddForm)
  }

  return (
    <Router>
        <div className="container">
        <Header title="Task Tracker" onClickHandler={toggleAddForm} formShown={showAddForm} />
        {showAddForm ? <AddTask onAdd={addTask}/> : ''}
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> )
        :(
        <h1>No Task</h1>)}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
