import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useApi } from '../../Context/ApiContext';
import Cookies from 'js-cookie';
import Spinner from '../../SpinnerProgress/Spinner';


const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {

  
  
const {getdata, error,loading ,fetchData} = useApi()



const [Total, setTotal]= React.useState('')

  React.useEffect(()=>{
    function getTotal(data: any[]){
      var total = 0
      getdata.map((data:any)=>{
        total += parseInt(data.product_price)
        console.log(data.product_price);
      })
      setTotal(total.toString())
    }
    getTotal(getdata)
  })


React.useEffect(() => {
  const token = Cookies.get('auth_token')
  console.log("cart token",token);
  fetchData(`${process.env.REACT_APP_BACKEND_URL}get-cart`,token)
}, []);
if (loading) {
  return <Spinner/>;
}
if (error) {
  return <Spinner/>;
}





  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {getdata.map((product:any) => (
          <ListItem key={product.product_title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.product_title} secondary={product.product_description} />
            <Typography variant="body2">{product.product_price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {Total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}