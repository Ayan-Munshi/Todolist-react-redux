import { useState } from 'react'


import './App.css'
import Todoinput from './componenets/todoinput'
import { Provider } from 'react-redux'
import Todolist from './componenets/Todolist'
import { store } from './Redux-store'


function App() {
 

  return (
    <Provider store ={store}>
      
      <h1>Vite + React</h1>
      <Todoinput/>
      <Todolist/>
      
    </Provider>
  )
}

export default App
