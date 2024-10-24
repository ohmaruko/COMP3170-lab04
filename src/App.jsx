import './App.css'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import Task from './components/Task';
import { initialTasks } from './tasks';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  
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

  const remainingTasksNum = tasks.filter(task => !task.isCompleted).length;
  const completedTasksNum = tasks.filter(task => task.isCompleted).length;
  function displayTasksNum() {
    if (filter === 'completed') return <h2>You have {completedTasksNum} tasks completed</h2>
    else if (filter === 'all' || filter ==='pending') return <h2>You have {remainingTasksNum} tasks remaining</h2>
  }

  function filteredTasks() {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(task => task.isCompleted);
    if (filter === 'pending') return tasks.filter(task => !task.isCompleted);
  }

  return (
    <>
      <h1>Daily Planner</h1>
      <TaskForm newTask={newTask} setNewTask={setNewTask} handlesubmit={handlesubmit}/>
      <div className='filterButtons'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      {displayTasksNum()}
      {filteredTasks().map(task => (
         <Task 
          key={task.title} 
          title={task.title} 
          isCompleted={task.isCompleted}
          onRemove={handleRemove}
          onCheck={handleCheckTask}
          />
      ))}
    </>
  )
}

export default App
