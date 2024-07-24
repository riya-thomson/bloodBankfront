import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Donor from './components/Donor/Donor'
import Admin from './components/Admin/Admin'
import Sidebar from './components/Donor/Sidebar'
import Request from './components/Donor/Request'
import Adminlogin from './components/Admin/Adminlogin'
import { Route, Routes } from 'react-router-dom'
import Reqadmin from './components/Admin/Reqadmin'
import Addition from './components/Admin/Addition'
import { AuthProvider } from './AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>     
         <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/signup' element= {<Signup/>}></Route>
        <Route path = '/donor' element= {<Donor/>}></Route>
        <Route path = '/request' element= {<Request/>}></Route>
        <Route path = '/adminlogin' element= {<Adminlogin/>}></Route>
        <Route path = '/admin' element= {<Admin/>}></Route>
        <Route path = '/addform' element= {<Addition/>}></Route>
        <Route path = '/reqadmin' element= {<Reqadmin/>}></Route>
      </Routes>
      </AuthProvider>


     
    </div>
  )
}

export default App













