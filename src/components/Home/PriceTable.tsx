import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function PriceTable(props:any) {

const [Total, setTotal]= React.useState('')

  React.useEffect(()=>{
    function getTotal(data: any[]){
      var total = 0
      data.map((data:any)=>{
        total += parseInt(data.product_price)
        console.log(data.product_price);
      })
      setTotal(total.toString())
    }
    getTotal(props.data)
  })
  function createData(
    PRICEDETAILS: string,
    PRICE: number,
   
  ) {
    return { PRICEDETAILS, PRICE };
  }
  
  const rows = [
    createData('price', parseInt(Total)),
    createData('Discount', parseInt(Total)*0.1),
    createData('Delivery Charges', 0),
    createData('Total Amount', parseInt(Total)-parseInt(Total)*0.1),
    createData('Total Save', parseInt(Total)*0.1),
  ];
  


  return (
    <TableContainer component={Paper} sx={{width:400}}>
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontWeight:'600', background:'#19105b',color:'white',width:'100%'}}>
            <TableCell sx={{color:'white'}}><b>PRICE DETAILS</b></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.PRICEDETAILS}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                <b>{row.PRICEDETAILS}</b>
              </TableCell>
              <TableCell align="right">{row.PRICE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}