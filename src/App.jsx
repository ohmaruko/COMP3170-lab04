import './App.css'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import Task from './components/task';
import { initialTasks } from './tasks';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  
  function handlesubmit(e) {
    e.preventDefault();
    newTask.trim() && setTasks([...tasks, {title: newTask, isCompleted: false}]);
    setNewTask('');
  }
  
  function handleCheckTask(title, isChecked) {
    const updatedTasks = tasks.map(task => 
      task.title === title ? {...task, isCompleted: isChecked} : task
    );
    setTasks(updatedTasks);
  }
  
  function handleRemove (taskTitle) {
    const updatedTasks = tasks.filter(task => task.title !==taskTitle);
    setTasks(updatedTasks);
  }

  const taskLists = tasks.map(task => (
    <Task 
      key={task.title} 
      title={task.title} 
      isCompleted={task.isCompleted}
      onRemove={handleRemove}
      onCheck={handleCheckTask}
      />
  ))

  const remainingTasks = tasks.filter(task => !task.isCompleted).length;
  
  return (
    <>
      <h1>Daily Planner</h1>
      <TaskForm newTask={newTask} setNewTask={setNewTask} handlesubmit={handlesubmit}/>
      <h2>You have {remainingTasks} tasks remaining</h2>
      {taskLists}
    </>
  )
}

export default App
