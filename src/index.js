import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import { AppHeader } from './components/AppHeader'
import { TaskList } from './components/TaskList'
import Footer from './components/Footer'
import './index.css'

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends Component {
  constructor(props) {
    super(props)
    this.maxId = 4
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
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => {
        return item.id !== id
      })
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

  addItem(text) {
    const newItem = {
      label: text,
      id: this.maxId++,
      condition: 'active',
      createdAt: Date.now(),
    }
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr,
      }
    })
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const newArray = todoData.map((item) => {
        if (id !== item.id) return item
        if (item.condition === 'active') {
          return { ...item, condition: 'completed' }
        }
        return { ...item, condition: 'active' }
      })
      return {
        todoData: newArray,
      }
    })
  }

  clearCompleted() {
    this.setState(({ todoData }) => {
      const newArray = todoData.filter((item) => {
        return item.condition !== 'completed'
      })
      return {
        todoData: newArray,
      }
    })
  }

  onFilterChange(tab) {
    this.setState({
      tab: tab,
    })
  }

  filter(items, tab) {
    switch (tab) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => {
          return item.condition === 'active'
        })
      case 'completed':
        return items.filter((item) => {
          return item.condition === 'completed'
        })
      default:
        return items
    }
  }

  render() {
    const todoCount = this.state.todoData.filter((item) => {
      return item.condition === 'active'
    }).length
    const visibleItems = this.filter(this.state.todoData, this.state.tab)
    return (
      <div className='todoapp'>
        <section className='main'>
          <AppHeader onItemAdded={this.addItem} />
          <TaskList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onEdit={this.editItem}
            onToggleDone={this.onToggleDone}
            onEditFormSubmit={this.onEditFormSubmit}
          />
          <Footer
            todo={todoCount}
            onClearCompleted={this.clearCompleted}
            activeTab={this.state.tab}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </div>
    )
  }
}

root.render(<App></App>)
