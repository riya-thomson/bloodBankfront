//reqadmin

import { Box, Button, Card, CardActions, CardContent, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Adminsidebar from './Adminsidebar'
import axios from 'axios'


const Reqadmin = () => {
  const [input, setInput] = useState([])

  useEffect(() => {
    axios.get("https://bloodbankback-u7zk.onrender.com/reqadmin")

    .then((res) => {
      console.log(res);
      setInput(res.data);
    })

    .catch((error) => {
      console.log(error);
    });
  }, []);

 
  const acceptValue = async (val) => {
    console.log(val);
    try {
      const acceptRes = await axios.post("https://bloodbankback-u7zk.onrender.com/accept", val);
      alert(acceptRes.data.message);
      const deleteId = val._id;
      console.log(deleteId);
  
      // Send email notification about acceptance
      await axios.post('https://bloodbankback-u7zk.onrender.com/send-email', {
        recipientEmail: val.Email,
        subject: 'Your Request Has Been Accepted',
        text: 'Congratulations! Your request in BloodShare has been accepted.'
      });
  
      const removeRes = await axios.delete(`https://bloodbankback-u7zk.onrender.com/remove/${deleteId}`);
      alert(removeRes.data.message);
      setInput(prevInput => prevInput.filter(item => item._id !== deleteId));
    } catch (error) {
      console.error(error);
    }
  };
  
  const rejectValue = async (id, email) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const deleteRes = await axios.delete("https://bloodbankback-u7zk.onrender.com/remove/" + id);
        alert(deleteRes.data.message);
  
        // Send email notification about rejection
        await axios.post('https://bloodbankback-u7zk.onrender.com/send-email', {
          recipientEmail: email,
          subject: 'Your Request Has Been Rejected',
          text: 'We regret to inform you that your request in BloodShare has been rejected.'
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  


  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Adminsidebar/>
          <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

      {/*------- cards------ */}
        <div style = {{margin:'2%'}}>
      <Grid container spacing = {7}>
        {input.map((val, i) => {
          return(
            <Grid item xs = {12} md = {3}>     {/*---to adjust width of box == md*/}
              <Card sx={{ minWidth: 275,  boxShadow: 14 }} key = {i} >
              <CardContent>
        <Typography sx={{ mb: 1.5  }} color="black" gutterBottom>
          Name : {val.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="black">
          Age : {val.Age}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="black">
          Email Id : {val.Email}
        </Typography>

        <Typography sx={{ mb: 1.5  }} color="black">
          Contact : {val.Contact}
        </Typography>    

        <Typography sx={{ mb: 1.5  }} color="red">
          Blood Type : {val.Blood_type}
        </Typography>  

        <Typography sx={{ mb: 1.5  }} color="black">
          Category : {val.Request_Caterogy}
        </Typography>   

        <Typography  color="black">
           Units of blood : {val.No_of_units}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" sx = {{color:'blue'}}
        onClick={() => {
          acceptValue(val)
        }} >Accept</Button>
        <Button size="small" sx = {{color:'red'}}
          onClick={() => {
            rejectValue(val._id, val.Email)
          }}>Reject</Button>
      </CardActions>
      
              </Card>
            </Grid>
          
        )
      })}

      </Grid>
      </div>
      
      
      </Box>
      </Box>
    </div>
  )
}

export default Reqadmin
