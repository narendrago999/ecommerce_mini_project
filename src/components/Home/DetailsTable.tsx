import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DetailsTable(props:any) {
  
function createData(
  title: string,
  value: string
 
) {
  return { title, value};
}

const rows = [
  createData('Brand', props.data.product_brand),
  createData('Colour', props.data.product_colour),
  createData('Fit Type', props.data.product_fit_type),
  createData('Style', props.data.product_style),
  createData('Neck Style', props.data.product_neck_style)
];
  return (
    <TableContainer  sx={{background:'none'}}>
      <Table sx={{ maxWidth: 250 }} size="small" aria-label="a dense table">
       
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <b>{row.title}</b>
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}