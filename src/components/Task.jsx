import '../App.css'

export default function Task({title,  isCompleted, onRemove, onCheck}) {
    
    function handleCheck() {
        onCheck(title, true);
    }

    return(
        <div className='single-task-container'>
            <div className='single-task'>
            <input 
                type='checkbox'
                id={title}
                name={title}
                value={title} 
                checked={isCompleted}
                onChange={handleCheck}
                disabled={isCompleted}
                />
            <label htmlFor={title}>
                {isCompleted ? <s>{title}</s> : title}
            </label>
            </div>
            <button onClick={() => onRemove(title)}>Remove</button>
        </div>
    )
}