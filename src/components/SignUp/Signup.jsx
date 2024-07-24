import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import '../Login/Login.css'; // Adjusted path if necessary
import { Form, Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import bgimg from '../../assets/signup_bg.png';
import axios from 'axios';

const Signup = () => {

  const navigate = useNavigate()
  const [input,setInput] = useState({Name:'',Email:'',Password:''})
   const handleChange = (e) =>{
     setInput({...input,[e.target.name]:e.target.value})
     console.log(input)
   }

 const addData = (e) => {
   e.preventDefault()
   axios.post('https://bloodbankback-u7zk.onrender.com/add', input)
   .then((response) => {
     console.log(response.data)
     console.log("data added")
     navigate('/login')
   })
   .catch((error) => {
     console.log(error)
   })
   
 };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 15,
        gap: 1,
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <Navbar /> */}

      <div className="login-fields">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color:'black' }}>
          Sign Up
        </Typography>
        <Typography sx={{textAlign:'left'}}variant = 'body1'>Username</Typography>

        <TextField label="Enter Username" variant="filled" name="Name" required onChange={handleChange} value={input.Name} fullWidth 
         sx={{
          border: '1px solid black', // Border color
          borderRadius: '8px', // Rounded corners
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Remove default border
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Remove hover border
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove focused border
            },
          },
        }}/>
        <br /><br />
        <Typography sx={{textAlign:'left'}}variant = 'body1'>Email Address</Typography>

        <TextField label="Enter Email" variant="filled" name="Email"  required onChange={handleChange} value={input.Email} fullWidth
         sx={{
          border: '1px solid black', // Border color
          borderRadius: '8px', // Rounded corners
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Remove default border
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Remove hover border
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove focused border
            },
          },
        }}/>
        <br /><br />
        <Typography sx={{textAlign:'left'}}variant = 'body1'>Password</Typography>

        <TextField label="Enter Password" variant="filled" name="Password" type='password' required onChange={handleChange}  value={input.Password}  fullWidth
         sx={{
          border: '1px solid black', // Border color
          borderRadius: '8px', // Rounded corners
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Remove default border
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Remove hover border
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove focused border
            },
          },
        }}/>
        <br /><br />
        <Button variant="contained" onClick={addData} fullWidth
                sx={{
                  backgroundColor: '#e42313',
                  '&:hover': {
                    backgroundColor: '#9e2014',
                  },
                 borderRadius: '8px', // Rounded corners
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'transparent', // Remove default border
                    },
                    '&:hover fieldset': {
                      borderColor: 'transparent', // Remove hover border
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'transparent', // Remove focused border
                    },
                  },
                  }}> <Link to = {'/login'} style = {{color:'white', textDecoration:'none'}} >Sign Up</Link>
        </Button>
      </div>

    </Box>
  );
};

export default Signup;
