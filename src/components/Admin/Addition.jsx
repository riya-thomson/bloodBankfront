import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material';
import React , { useEffect, useState } from 'react';
import Adminsidebar from './Adminsidebar';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addition = (props) => {

  const navigate = useNavigate();

  var location = useLocation();
  // console.log("loc", location.state.val.Name)

   // New state to track submission status
   const [isSubmitted, setIsSubmitted] = useState(false);

  const addHandler = () => {
    console.log("clicked!")
    if(location.state!== null){
      axios.put("https://bloodbankback-u7zk.onrender.com/edit/" + location.state.val._id, input)
      .then((res) => {
        alert(res.data.message)
        setIsSubmitted(true); // Set submission status to true
      })
      .catch((error) => console.log(error))
    }else{
    //sending post to add new data
    axios.post("https://bloodbankback-u7zk.onrender.com/accept", input)
    .then((res) => {
      console.log(res);
      alert(res.data.message);
      setIsSubmitted(true); // Set submission status to true
    })
      .catch((error) => {
        console.log(error)
        alert("An error occurred. Please try again.");

      })
    }
  }

   // Navigate to admin page if submission was successful
   useEffect(() => {
    if (isSubmitted) {
      navigate('/admin');
    }
  }, [isSubmitted]);

  var[input, setInput] = useState({Name:"", Age:"", Email:"", Contact:"", Blood_type:"", Request_Caterogy:"", No_of_units:""})

  const inputHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
    console.log(input)
  }

  useEffect(() => {
    if(location.state !== null){
        setInput({...input, 
          Name : location.state.val.Name,
          Age : location.state.val.Age,
          Email : location.state.val.Email,
          Contact : location.state.val.Contact,
          Blood_type : location.state.val.Blood_type,
          Request_Caterogy : location.state.val.Request_Caterogy,
          No_of_units : location.state.val.No_of_units

        })
    }
  },[])

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Adminsidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />

          <br /><br />
          <div className="req-container">
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ width: '48%', mr: 2 }}>
                <TextField id="filled-basic" label="Name" variant="filled" onChange={inputHandler} name = "Name" value = {input.Name} fullWidth />
              </Box>
              <Box sx={{ width: '48%' }}>
                <TextField id="filled-basic" label="Age" variant="filled" onChange={inputHandler} name = "Age" value = {input.Age} fullWidth />
              </Box>
            </Box>
            <br />

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ width: '48%', mr: 2 }}>
                <TextField id="filled-basic" label="Email ID" variant="filled" onChange={inputHandler} name = "Email" value = {input.Email} fullWidth />
              </Box>
              <Box sx={{ width: '48%' }}>
                <TextField id="filled-basic" label="Contact" variant="filled" onChange={inputHandler} name = "Contact" value = {input.Contact}  fullWidth />
              </Box>
            </Box>
            <br />

            <TextField id="filled-basic" label="Blood type" variant="filled" onChange={inputHandler} name = "Blood_type" value = {input.Blood_type}  fullWidth />
            <br /><br />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Request Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={input.Request_Caterogy}
                  onChange={inputHandler}
                  label="Request Category"
                  name="Request_Caterogy"
                >
                  <MenuItem value={"Donor"}>Donor</MenuItem>
                  <MenuItem value={"Receiver"}>Receiver</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br /><br />

            <TextField id="filled-basic" label="No.of units of blood required" variant="filled" onChange={inputHandler} name = "No_of_units" value = {input.No_of_units}  fullWidth />
            <br /><br />

            <Button variant="contained" onClick = {addHandler} fullWidth sx={{ width: '40%', color: 'white' ,  display: 'block', margin: '20px auto'}}>Submit</Button>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Addition
