import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import bg_img from '../../assets/image_bg.png';
import { useAuth } from '../../AuthContext.jsx';
import axios from 'axios';

const ADMIN_EMAIL = 'admin@gmail.com'; 
const ADMIN_PASSWORD = 'admin';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ Email: '', Password: '' });
  const { setIsAuthenticated, setUserId } = useAuth(); // Adjusted to match the names in AuthProvider

  useEffect(() => {
    return () => {
      setInput({ Email: '', Password: '' });
    };
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if entered credentials match admin credentials
    if (input.Email === ADMIN_EMAIL && input.Password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setUserId(ADMIN_EMAIL); // Assuming you want to set the userId as the email
      navigate('/admin'); // Navigate to admin page
      return; // Exit function after navigating
    }
  
    try {
      const response = await axios.get('https://bloodbankback-u7zk.onrender.com/view', { params: { Email: input.Email } });
      const userData = response.data;
  
      if (userData.Email === input.Email && userData.Password === input.Password) {
        console.log("Credentials matched");
        setIsAuthenticated(true);
        setUserId(userData.Email);
        navigate('/donor'); // Redirect based on user role or other conditions
      } else {
        console.log("Credentials did not match");
        alert('Invalid username or password.'); // Show alert message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('An error occurred during login. Please try again later.'); // Show alert message for API call failures
    }
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
        backgroundImage: `url(${bg_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="login-fields" style={{ maxWidth: 450, margin: 'auto' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color:'white' }}>
          Login
        </Typography>
        <Typography sx={{ textAlign: 'left' }} variant="body1">
          Email Address
        </Typography>
        <TextField label="Enter Email" variant="filled" name="Email" required value={input.Email} onChange={handleChange} fullWidth />
        <br />
        <br />
        <Typography sx={{ textAlign: 'left' }} variant="body1">
          Password
        </Typography>
        <TextField label="Enter Password" variant="filled" name="Password" required type="password" value={input.Password} onChange={handleChange} fullWidth />
        <br />
        <br />
        <Button onClick={handleSubmit}
          sx={{
            '&:hover': {
              backgroundColor: 'white',
            }
          }}
        >
            Login
        </Button>

        <br />
        <br />

        <Typography variant="h7" gutterBottom sx={{ fontWeight: 'bold' }}>
          Don't have an account?
        </Typography>
        <Link to="/signup">
          <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', cursor: 'pointer' }}>
            Register Here.
          </Typography>
        </Link>
      </div>
    </Box>
  );
};

export default Login;
