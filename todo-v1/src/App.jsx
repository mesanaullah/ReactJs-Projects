import { useState } from 'react'
import React from "react"
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import Items from './components/Items'
import TimeAndDate from './components/TimeAndDate'
import WelcomeMessage from './components/WelcomeMessage'
import "./App.css"


function App() {

  const [TodoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...TodoItems,
      { ItemsName: itemName, Date: itemDueDate }];
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = (todoItemName) => {
    // console.log(`item Deleted: ${todoItemName}`)
    const newTodoItems = TodoItems.filter((item) => item.ItemsName !== todoItemName);
    setTodoItems(newTodoItems);
  }



  return (
    <>
      <TimeAndDate></TimeAndDate>
      <center className='todo-container' >
        <AppName />
        <div className="items-container">
          <AddTodo onNewItem={handleNewItem} />
          <Items Items={TodoItems} onDeleteClick={handleDeleteItem}></Items>
          {TodoItems.length === 0 && <WelcomeMessage />}

        </div>
      </center>

    </>
  )
}

export default App
