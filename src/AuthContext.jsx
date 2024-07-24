import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const navigate = useNavigate();

  // Declare storedUserId at the top level to make it accessible throughout the component
  let storedUserId = '';

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    storedUserId = localStorage.getItem('sUserId'); // Assign the value to storedUserId
    
    if (storedLoginStatus === 'true') {
      setIsAuthenticated(true);
      setUserId(storedUserId);
      console.log("logged in auth context");
      console.log("USERNAME = " + storedUserId);
    }
  }, []);

  useEffect(() => {
    axios.get('https://bloodbankback-u7zk.onrender.com/view', { params: { email: userId } })
      .then((response) => {
        const email = response.data.Email;
        const password = response.data.Password;

        if (email === storedUserId) { // Now storedUserId is accessible here
          console.log("email matched");
          if (response.data.Password === password || localStorage.getItem('Password')) {
            console.log("password matched");
            setIsAuthenticated(true);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('sUserId', response.data.Email);
            localStorage.setItem('password', response.data.Password);

            setUserId(email);
            if(response.data.role == 'user'){
              setIsAdmin(false);
              navigate('/');  
            } else {
              setIsAdmin(true);
              navigate('/admin');
            }
          } else {
            console.log("password not matched");
          }
        } else {
          console.log("email not matched");
        }
      })
      .catch((error) => {
        console.log("error" + error);
      })
      .finally(() => {
        setSubmitted(false);
      });
  }, [submitted]);

  const login = (email, password) => {
    setUserId(email);
    setSubmitted(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId('');
    setIsAdmin(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ authenticated, setIsAuthenticated, userId, setUserId, isAdmin, setIsAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
