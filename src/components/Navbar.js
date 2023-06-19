// import React, { useState } from 'react'
// // import { Button } from '@mui/material'
// import { AppBar, Grid, Toolbar, Tabs, Tab, Typography, useTheme, useMediaQuery, Button } from '@mui/material';
// import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
// import Drawercomp from './Drawercomp';
// import { useNavigate } from 'react-router-dom';



// const Navbar = ({links}) => {
//     const navigate = useNavigate()
//     const theme = useTheme();
//     const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
//     const [value, setValue] = useState()//0
//     const handleLogout = () => {
//         // sessionStorage.removeItem('Auth Token');
//         sessionStorage.clear();
//         navigate('/')
//     }
    
        

//   return (
//     <div>
//         <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(55,46,210,1) 0%, rgba(24,24,167,0.8744747899159664) 69%, rgba(179,0,255,1) 100%);'}}>
//             <Toolbar>
//                {isMatch ? <>
//                <Typography>
//                             <NewspaperOutlinedIcon></NewspaperOutlinedIcon>
//                         </Typography>
//                <Drawercomp links={links}/>
//                </>:<Grid sx={{placeItems:'center'}} container>
//                     <Grid item xs={2}>
//                         <Typography>
//                             <NewspaperOutlinedIcon></NewspaperOutlinedIcon>
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={8}>
//                         <Tabs
//                           indicatorColor='secondary'
//                           textColor='inherit'
//                           value={value}
//                           onChange={(e,val)=> setValue(val)}>
//                             {links.map((link,index)=>(
//                                 <Tab  key={index} label={link}/>
                                
//                             ))}
//                             <Button onClick={handleLogout}>LOGOUT</Button>
//                         </Tabs>
                        
//                     </Grid>
//                     <Grid item xs={2}/>
                    
//                 </Grid>}
//             </Toolbar>
//         </AppBar>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import { useNavigate } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Tabs, Tab, Typography, useTheme, useMediaQuery, Button } from '@mui/material';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Bbc from './Bbc';
import Us from './Us'
import Germany from './Germany'
import Trump from './Trump'


const links = ["Us", "Bbc", "Germany", "Trump"]
const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = ["US", "BBC", "Germany", "Trump"];

  const tabContents = [
    <Us />,
    <Bbc />,
    <Germany />,
    <Trump />
  ];

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
//   const [value, setValue] = useState()//0
  const handleLogout = () => {
      // sessionStorage.removeItem('Auth Token');
      sessionStorage.clear();
      navigate('/')
  }


  return (
    <div>
      <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(55,46,210,1) 0%, rgba(24,24,167,0.8744747899159664) 69%, rgba(179,0,255,1) 100%);'}} position="static">
      <Toolbar>
                {isMatch ? <>
                <Typography>
                             <NewspaperOutlinedIcon></NewspaperOutlinedIcon>
                         </Typography>
                 <Drawer PaperProps={{
        sx : {backgroundColor:'rgba(49,49,116,1)'}
        }} open={open} onClose={()=>setOpen(false)}>

        <Grid container direction="column" justifyContent="space-between">
  <Tabs value={value} onChange={handleTabChange} orientation="vertical">
    {tabs.map((tab, index) => (
      <Tab key={index} label={tab} />
    ))}
  </Tabs>
  <Button onClick={handleLogout}>LOGOUT</Button>
</Grid>
    </Drawer>

    <IconButton sx={{marginLeft:'auto', color:'white'}} onClick={()=>setOpen(!open)}>
        <MenuIcon/>
    </IconButton>
                </>:<Grid sx={{placeItems:'center'}} container>
                     <Grid item xs={2}>
                         <Typography>
                             <NewspaperOutlinedIcon></NewspaperOutlinedIcon>
                         </Typography>
                     </Grid>
                     <Grid item xs={8}>
     <Tabs value={value} onChange={handleTabChange}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
          <Button onClick={handleLogout}>LOGOUT</Button>
        </Tabs>
        </Grid>
                     <Grid item xs={2}/>
                    
                 </Grid>}
             </Toolbar>
      </AppBar>
      
      {/* Render the content based on the selected tab value */}
      {tabContents[value]}
    </div>
  );
};

export default Navbar;
