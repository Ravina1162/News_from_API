import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Link, Grid } from '@mui/material';
import page from './Images/page.jpg'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Home';

const Login = () => {  
  const navigate = useNavigate();
  const [error, setError] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        sessionStorage.setItem("signed", "yes")
        navigate('/Home');
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
   
  return (
    <Box
      sx={{
        backgroundImage: `url(${page})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Grid container sx={{ height: '50%', padding: '120px' }}>
        <Grid item xs={false} sm={6} />
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '40px',
              borderRadius: '10px',
              maxWidth: '400px',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <form style={{ width: '100%' }} onSubmit={handleLogin}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                Login
                <ToastContainer/>
              </Button>
            </form>
            <Typography variant="body1" align="center" mt={2}>
              Don't have an account? <Link href="/">Sign up</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
