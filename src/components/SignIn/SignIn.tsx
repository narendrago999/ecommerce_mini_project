import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { useApi } from '../../Context/ApiContext';
import { useNavigate } from 'react-router-dom';




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
const Navigate = useNavigate()  
  const {data, postData} = useApi()
  React.useEffect(() => {
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
    const data = new FormData(event.currentTarget);
    const user_info = {
      email: data.get('email'),
      password: data.get('password'),
    }
    postData('http://localhost:8080/signin',user_info)
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              color='secondary'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color='secondary'
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,background:'#19105b','&:hover':{background:'#251A7B'}}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassward" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}