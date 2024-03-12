import React, {useState} from 'react'
import {FaTrash} from 'react-icons/fa'

import {FaPen} from 'react-icons/fa'

import './index.css'

const TodoItem = () => {
  const [tasks, setTasks] = useState([])
  const [counter, setCounter] = useState(0)
  const [repeat, setRepeat] = useState(1)
  const [inputText, setInput] = useState('')

  const addTask = (taskName, quantity) => {
    const newTasks = Array.from({length: quantity}, (_, index) => ({
      id: Date.now() + index,
      name: taskName,
    }))

    setTasks(prevTasks => [...prevTasks, ...newTasks])
    setCounter(prevCounter => prevCounter + 1)
  }

  const deleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    setCounter(prevCounter => prevCounter + 1)
  }

  const changeText = event => {
    setInput(event.target.value)
  }

  return (
    <div className='container'>
      <h2>Day Goals!</h2>
      <input
        type='text'
        value={inputText}
        onChange={changeText}
        className='input'
        placeholder='Add a Todo'
      />
      <button className='addBtn' onClick={() => addTask('Nagendra', 3)}>
        Add Todo
      </button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className='list'>
            <button className='todo-container'>
              {task.name}{' '}
              <span onClick={() => deleteTask(task.id)} className='span'>
                (Task Updates Counter: {counter})
                <FaPen />
                <FaTrash />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem
