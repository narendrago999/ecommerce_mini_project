import React, {useState, useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApiProvider } from '../../Context/ApiContext';
import { useApi } from '../../Context/ApiContext';
import Spinner from '../../SpinnerProgress/Spinner';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();



const SignUp:React.FC = () => {
  const Navigate = useNavigate()

const {data, error, postData} = useApi()
useEffect(() => {
  if(data.message === "userCreated"){
    toast.success('Registration successful!', {
      position: 'bottom-right', 
      autoClose: 1000, 
    });
    setTimeout(()=>{
      window.location.reload()
      Navigate('/signin')
    },800)
  }
  if(data.message === "User Already Exists"){
    toast.error('User Already Exists', {
      position: 'bottom-right', 
      autoClose: 1000, 
    });
  }
  if(data.message === "Email Sent"){
    toast.success('Email Sent to the given Email. Click the link to Activate Your Account', {
      position: 'bottom-right', 
      autoClose: 1000, 
    });
  }
  if(data.message === "Error creating user"){
    toast.error('Try After Some Time!!', {
      position: 'bottom-right', 
      autoClose: 1000, 
    });
  }
  if(data.message === "All Fields are Required"){
    toast.error('All Fields are Required', {
      position: 'bottom-right', 
      autoClose: 1000, 
    });
  }
}, [postData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    const formdata = new FormData(event.currentTarget);
    
      // Show a success toast notification
      const data1 = {
        first_name:formdata.get('firstname'),
        last_name:formdata.get('lastname'),
        user_email: formdata.get('email'),
        password: formdata.get('password'),
      }
      postData('http://localhost:8080/signup',data1)
     
  };

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: '#19105b' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  color='secondary'
                 
                  autoFocus
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  color='secondary'
                  autoComplete="family-name"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color='secondary'
                  autoComplete="email"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  color='secondary'
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:'#19105b','&:hover':{background:'#251A7B'} }}
              >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" sx={{  color:'#19105b' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp