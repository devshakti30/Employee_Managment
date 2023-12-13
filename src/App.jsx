import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './UI/Home'
import EditEmployee from './Operation/EditEmployee'
import AddEmployee from './Operation/AddEmployee'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/'}element={<Home/>}></Route>
        <Route path={'/editemployee/:id'}element={<EditEmployee/>}/>
        <Route path={'/addemployee'}element={<AddEmployee/>}/>
      </Routes>
    </>
  )
}

export default App
