import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import '../Login/Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100vh', 
        padding: 0.5,
        gap: 1,
      }}

    >

      <div className="introblock">
        <h1>Welcome</h1>
        <p>Empower your decisions, manage your resources, and lead with confidence. Your control panel awaits—log in to unlock the full potential of your administrative powers.</p>
      </div>
      <div className="login-fields">
      <Typography  variant = 'h4'> Admin Login</Typography>
      <br />
        <Typography sx = {{textAlign:'left'}}variant = 'body1'>Email Address</Typography>
        <TextField label=" Enter Email Address" variant="filled" name="Email" fullWidth
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
        <Typography sx = {{textAlign:'left'}}variant = 'body1'>Password</Typography>

        <TextField label="Enter Password" variant="filled" name="Password" type="password" fullWidth
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
        <Button variant="contained" fullWidth
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
              }}> <Link to={'/admin'} style = {{color:'white', textDecoration:'none'}} >Log in</Link>
        </Button>
<br /><br />

       
             

      </div>
    </Box>
  );
};

export default Login;
