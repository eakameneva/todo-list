import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import AppHeader from './components/AppHeader'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends Component {
  constructor(props) {
    super(props)
    this.maxId = 0
    this.state = {
      todoData: [],
      tab: 'all',
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.onEditFormSubmit = this.onEditFormSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleDone = this.onToggleDone.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.onEscInEditForm = this.onEscInEditForm.bind(this)
  }

  onEditFormSubmit(id, value) {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item
        return { ...item, label: value, condition: 'active' }
      })
      return {
        todoData: newArray,
      }
    })
  }

  onFilterChange(tab) {
    this.setState({
      tab,
    })
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item
        if (item.condition === 'active') {
          return { ...item, condition: 'completed', minutesAmount: 0, secondsAmount: 0 }
        }
        return { ...item, condition: 'active' }
      })
      return {
        todoData: newArray,
      }
    })
  }

  onEscInEditForm(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item
        return { ...item, condition: 'active' }
      })
      return {
        todoData: newArray,
      }
    })
  }

  clearCompleted() {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => item.condition !== 'completed')
      return {
        todoData: newArray,
      }
    })
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => item.id !== id)
      return {
        todoData: newArray,
      }
    })
  }

  editItem(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item
        return { ...item, condition: 'editing' }
      })
      return {
        todoData: newArray,
      }
    })
  }

  // eslint-disable-next-line class-methods-use-this
  visibleItems(condition, tab) {
    if (condition === 'editing') {
      return 'editing'
    }
    if (tab === 'all') {
      return ''
    }
    if (condition === 'active' && tab === 'active') {
      return ''
    }
    if (condition === 'completed' && tab === 'active') {
      return 'hidden'
    }
    if (condition === 'completed') {
      return 'completed'
    }
    return 'hidden'
  }

  addItem(text, min, sec) {
    const newItem = {
      label: text,
      id: this.maxId + 1,
      condition: 'active',
      createdAt: Date.now(),
      minutesAmount: min,
      secondsAmount: sec,
    }
    this.maxId += 1
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr,
      }
    })
  }

  render() {
    const { todoData, tab } = this.state
    const todoCount = todoData.filter((item) => item.condition === 'active').length
    return (
      <div className='todoapp'>
        <section className='main'>
          <AppHeader onItemAdded={this.addItem} />
          <TaskList
            todos={todoData}
            activeTab={tab}
            onDeleted={this.deleteItem}
            onEdit={this.editItem}
            onEscInEditForm={this.onEscInEditForm}
            onToggleDone={this.onToggleDone}
            onEditFormSubmit={this.onEditFormSubmit}
            visibleItems={this.visibleItems}
          />
          <Footer
            todo={todoCount}
            onClearCompleted={this.clearCompleted}
            activeTab={tab}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </div>
    )
  }
}

root.render(<App />)
