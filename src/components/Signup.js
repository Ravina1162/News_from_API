import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Typography, Button, TextField, Link} from '@mui/material'
import rpaper from './Images/rpaper.jpg'
import google from './Images/google.png'
import { auth, provider } from './config'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAuth,createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth'

const Signup = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [value,setValue] = useState('')
  const navigate = useNavigate();




    const handleClick = () =>{
        signInWithPopup(auth, provider).then((data)=>{
            console.log(data.user)
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            sessionStorage.setItem("signed", "yes")
            navigate('/Home')

            if((error) => {
                console.log('Error signing in with Google:', error);
              });

        })
    }

    const handleSignup = (e) => {
      e.preventDefault();
       const authentiaion = getAuth()
       createUserWithEmailAndPassword(authentiaion, email, password,true)
        .then((userCredential) => {
          
          // Signup successful
          const user = userCredential.user;
          console.log('Signup successful:', user);
         // localStorage.setItem(data.user.email,"")
          sessionStorage.setItem("signed", "yes")
          navigate('/Home')
          // Redirect to home or do something else
        })
        .catch((error) => {
          // Signup error
          setError(error.message);
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email already exists');
            
          }
          console.log('Signup error h baby:', error);
        });
    };



    
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
        // storing email
    },[]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${rpaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="div"
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          SignUp
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
          variant="contained" fullWidth type="submit">
            Signup
            <ToastContainer/>
          </Button>
        </form>
        <Typography variant="body1" align="center" mt={2}>
          Already have an account? <Link href="Login">Login</Link>
        </Typography>
        <Typography variant="body1" align="center" mt={2}>
          Or
          {
          <Button
            onClick={ handleClick }
            variant="outlined"
            fullWidth
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}
          >
            <img src={google} alt="Google Logo" sx={{ width: 20, height: 20, mr: 1 }} style={{ marginRight: '8px' }} />
            Signin with Google
          </Button>
                }
        </Typography>
      </Box>

    </Box>
  )
}

export default Signup
