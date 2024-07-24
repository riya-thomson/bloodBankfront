import { Box, Button, Card, CardActions, CardContent, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Adminsidebar from './Adminsidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Admin = () => {

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

const deleteValue = (id) => {
  if (window.confirm('Are you sure you want to delete this item?')) {
  axios.delete("https://bloodbankback-u7zk.onrender.com/delete/" + id)
  .then((res) => {
    alert(res.data.message);
    window.location.reload();
  })
  .catch((error) => console.log(error))
}}

const updateValue = (val) => {
  console.log("Button clicked!")
  navigate('/addform', {state: {val}})
}

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Adminsidebar/>
          <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />

      {/*------- cards------ */}
        <div style = {{margin:'2%'}}>
      <Grid container spacing = {2}>
      {output.map((val, i) => {
          return (
            <Grid item xs = {12} md = {5}>     {/*---to adjust width of box == md*/}
              <Card sx={{ minWidth: 275,  boxShadow: 14 }} key = {i} >
              <CardContent>
        <Typography sx={{ mb: 1.5  }} color="black" >
          Donor Name : {val.Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="black">
          Blood Group : {val.Blood_type}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="black">
          Email Id : {val.Email}
        </Typography>

        <Typography  color="black">
          Contact :  {val.Contact}
        </Typography>     
      </CardContent>

      <CardActions>
        <Button size="small" sx = {{color:'red'}}
        onClick={() => {
          deleteValue(val._id)
        }}>Delete</Button>
        <Button size="small" sx = {{color:'blue'}}
        onClick ={() => {updateValue(val)}}
          >Update</Button>
      </CardActions>
      
              </Card>
            </Grid>
          
        )
      })}
      </Grid>
      </div>
      
      
      </Box>
      </Box>
    
    </>
  )
}

export default Admin
