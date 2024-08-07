import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'

import AppHeader from './components/AppHeader'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  const maxId = useRef(0)
  const [todoData, setTodoData] = useState([])
  const [tab, setTab] = useState('all')

  const onEditFormSubmit = (id, value) => {
    setTodoData((prevData) => {
      const newArray = prevData.map((item) => {
        if (id !== item.id) return item
        return { ...item, label: value, condition: 'active' }
      })
      return newArray
    })
  }

  const onFilterChange = (chosenTab) => {
    setTab(chosenTab)
  }

  const onToggleDone = (id) => {
    setTodoData((prevData) => {
      const newArray = prevData.map((item) => {
        if (id !== item.id) return item
        if (item.condition === 'active') {
          return { ...item, condition: 'completed', minutesAmount: 0, secondsAmount: 0 }
        }
        return { ...item, condition: 'active' }
      })
      return newArray
    })
  }

  const onEscInEditForm = (id) => {
    setTodoData((prevData) => {
      const newArray = prevData.map((item) => {
        if (id !== item.id) return item
        return { ...item, condition: 'active' }
      })
      return newArray
    })
  }

  const clearCompleted = () => {
    setTodoData((prevData) => {
      const newArray = prevData.filter((item) => item.condition !== 'completed')
      return newArray
    })
  }

  const deleteItem = (id) => {
    setTodoData((prevData) => {
      const newArray = prevData.filter((item) => item.id !== id)
      return newArray
    })
  }

  const editItem = (id) => {
    setTodoData((prevData) => {
      const newArray = prevData.map((item) => {
        if (id !== item.id) return item
        return { ...item, condition: 'editing' }
      })
      return newArray
    })
  }

  const addItem = (text, min, sec) => {
    const newItem = {
      label: text,
      id: maxId.current + 1,
      condition: 'active',
      createdAt: Date.now(),
      minutesAmount: min,
      secondsAmount: sec,
    }
    maxId.current += 1
    setTodoData((prevData) => {
      const newArr = [...prevData, newItem]
      return newArr
    })
  }

  const todoCount = todoData.filter((item) => item.condition === 'active').length
  return (
    <div className='todoapp'>
      <section className='main'>
        <AppHeader onItemAdded={addItem} />
        <TaskList
          todos={todoData}
          activeTab={tab}
          onDeleted={deleteItem}
          onEdit={editItem}
          onEscInEditForm={onEscInEditForm}
          onToggleDone={onToggleDone}
          onEditFormSubmit={onEditFormSubmit}
        />
        <Footer todo={todoCount} onClearCompleted={clearCompleted} activeTab={tab} onFilterChange={onFilterChange} />
      </section>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
