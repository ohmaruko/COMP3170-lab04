import '../App.css'
import { useState } from 'react'

export default function Task({title,  isCompleted, onRemove, onCheck}) {
    const [isChecked, setIsChecked] = useState(false);
    
    function handleCheck() {
        onCheck(title, !isCompleted);
        setIsChecked(!isChecked);
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
                />
            <label htmlFor={title}>
                {isChecked ? <s>{title}</s> : title}
            </label>
            </div>
            <button onClick={() => onRemove(title)}>Remove</button>
        </div>
    )
}