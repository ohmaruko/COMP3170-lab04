import '../App.css'

export default function TaskForm({
    newTask, setNewTask, handlesubmit
}) {

    return(
        <form className='input-area' onSubmit={handlesubmit}>
            <input 
                className='input-new-task'
                id='new-task'
                name='new-task'
                type='text'
                placeholder='new task ...'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                />
            <button className='button-save'>Save</button>
        </form>
    )
}