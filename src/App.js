import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";



function App() {
  const [showAddForm,setShowAddFrom] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointement',
      day: 'Feb 5th at 2:30pm',
      remider: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      remider: true
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      remider: false
    }
  ])

/** function for Adding Task  */
  const addTask = (task) => {
    console.log('adding',{task})
    const id = tasks.length+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

/** function for deleting tasks from the Task Component */
  const deleteTask = (id) =>{
    setTasks(tasks.filter( (task) => task.id !== id))
  }
/**Toggling the reminder  */
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,remider : !task.remider} : task ))
  }
/** toggle the visibility of the AddTask */
  const toggleAddForm = () =>{
    setShowAddFrom(!showAddForm)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onClickHandler={toggleAddForm} formShown={showAddForm} />
      {showAddForm ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> )
      :(
      <h1>No Task</h1>)}
      
    </div>
  );
}

export default App;
