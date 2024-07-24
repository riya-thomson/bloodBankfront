import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const drawerWidth = 230;

export default function PermanentDrawerLeft() {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = React.useState('');
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor:'rgb(228 35 19)', height:60 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div"sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          <Button ><Link to = {'/'} style = {{color:'white', textDecoration:'none'}}>Log out</Link></Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow:5,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider sx= {{backgroundColor:'black'}}/>
        <List>

        <ListItem disablePadding sx = {{display:'block'}} onClick={() => {navigate("/admin");  setActiveLink('/admin');}}>
        <ListItemButton sx={{color: activeLink === '/admin' ? 'red' : 'black'}}>
                            <ListItemText primary="Available donors" />
                        </ListItemButton>
        </ListItem>

        <Divider sx= {{backgroundColor:'black'}}/>

        <ListItem disablePadding sx = {{display:'block'}} onClick={() => {navigate("/addform");  setActiveLink('/addform');}}>
              <ListItemButton sx={{color: activeLink === '/addform' ? 'red' : 'black'}}>
                            <ListItemText primary="Donor addition form" />
                        </ListItemButton>
        </ListItem>

        <Divider sx= {{backgroundColor:'black'}}/>

        <ListItem disablePadding sx = {{display:'block'}} onClick={() => {navigate("/reqadmin");  setActiveLink('/reqadmin');}}>
        <ListItemButton sx={{color: activeLink === '/reqadmin' ? 'red' : 'black'}}>
                            <ListItemText primary="Blood donation requests" />
                        </ListItemButton>
        </ListItem>

        </List>
        <Divider sx= {{backgroundColor:'black'}} />
       
      </Drawer>
    </Box>
  );
}
