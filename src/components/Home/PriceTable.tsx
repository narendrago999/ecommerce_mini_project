import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  PRICEDETAILS: string,
  PRICE: number,
 
) {
  return { PRICEDETAILS, PRICE };
}

const rows = [
  createData('price', 11098),
  createData('Discount', 6407),
  createData('Delivery Charges', 0),
  createData('Total Amount', 11098-6407),
  createData('Total Save', 6407),
];

export default function PriceTable() {
  return (
    <TableContainer component={Paper} sx={{width:400}}>
      <Table sx={{ maxWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>PRICE DETAILS</b></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.PRICEDETAILS}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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