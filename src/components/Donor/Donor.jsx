import { Box, Card, CardContent, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Donor = () => {
  var [output, setOutput] = useState([])
  var navigate = useNavigate();
  
  useEffect(() => {
    axios.get("https://bloodbankback-u7zk.onrender.com/donor")
    .then((res) => {
      console.log(res.data);
      setOutput(res.data);
  })

  .catch((error) => {
      console.log(error);
  });
}, []); 

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar/>
          <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

      {/*------- cards------ */}
        <div style = {{margin:'2%'}}>
      <Grid container spacing = {9}>
        {output.map((val, i) => {
          return (
            <Grid item xs = {12} md = {5}>
              <Card sx={{ minWidth: 300,  boxShadow: 14 }} key = {i} >
              <CardContent>
        <Typography sx={{ mb: 1.5  }} color="black" >
          Donor Name : {val.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="red">
          Blood Group : {val.Blood_type}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="black">
          Email Id : {val.Email}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="black">
          Contact :  {val.Contact}
        </Typography>     
      </CardContent>
      
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

export default Donor
