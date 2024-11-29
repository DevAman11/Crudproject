import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import View from './assets/Components/View'
import SignUp from './assets/Components/SignUp'
import Login from './assets/Components/Login'
import Update from './assets/Components/Update'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App