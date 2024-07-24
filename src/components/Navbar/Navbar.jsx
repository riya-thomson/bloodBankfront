import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position = "fixed">
        <Toolbar sx = {{backgroundColor:"white"}}>
          <Link to = {'/'}>
            <img src= {logo} alt="logo" className="logo-image"/>
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          

          <Button className = 'navbar-button'><Link to ={'/login'} className='link-button' style = {{color:'black', textDecoration:'none'}} >Login</Link></Button>
          <Button className = 'navbar-button'><Link to ={'/signup'} className='link-button' style = {{color:'black', textDecoration:'none'}} >SignUp</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
