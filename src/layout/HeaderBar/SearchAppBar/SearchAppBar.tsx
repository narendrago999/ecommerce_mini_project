import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import SelectSmall from '../../../components/Category Dropdown/SelectSmall';
import { Link, redirect, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cookies from 'js-cookie';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
const Navigate = useNavigate()
  const [AuthToken,setAuthToken]= React.useState('')
console.log(AuthToken);

  React.useEffect(()=>{
    function get_auth_token(){
      const auth_token:string | undefined = Cookies.get('auth_token')
      
      if(auth_token){
        console.log("token", auth_token);
        setAuthToken(auth_token)
      }
    }
    get_auth_token()
  },[])
  function handleLogout(){
    Cookies.remove('auth_token')
    Navigate('/signin')
    window.location.reload()
    
  }



  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor:'#19105b'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Ecommerce App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className="category">
        <SelectSmall />
      </div>
      <Link to="/">
          <Button variant="contained" disableElevation sx={{marginLeft:1 , marginRight:1, backgroundColor:'#19105b', border:1, borderColor: 'grey.500' }}>
      HOME
    </Button>
    </Link>
    {AuthToken?'':
      <Link to="/signin">
          <Button variant="contained" disableElevation sx={{marginLeft:1 , marginRight:1, backgroundColor:'#19105b', border:1, borderColor: 'grey.500' }}>
      SignIn
    </Button>
    </Link>
}
{AuthToken?'':
    <Link to="/signup">
          <Button variant="contained" disableElevation sx={{marginLeft:1 , marginRight:1, backgroundColor:'#19105b', border:1, borderColor: 'grey.500' }}>
      SignUp
    </Button></Link>
}
    <Link to="/cart">
          <Button variant="contained" disableElevation sx={{marginLeft:1 , marginRight:1, backgroundColor:'#19105b', border:1, borderColor: 'grey.500' }}>
      Cart <ShoppingCartIcon sx={{marginLeft:1}}/>
    </Button></Link>
    {AuthToken?
    
          <Button variant="contained" onClick={handleLogout} disableElevation sx={{marginLeft:1 , marginRight:1, backgroundColor:'#19105b', border:1, borderColor: 'grey.500' }}>
      LogOut
    </Button>:''
}
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}