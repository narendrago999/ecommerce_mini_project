import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  title: string,
  value: string
 
) {
  return { title, value};
}

const rows = [
  createData('Brand', "Jockey"),
  createData('Colour', "Assorted"),
  createData('Fit Type', "Regular Fit"),
  createData('Style', "Solid"),
  createData('Neck Style', "Round Neck")
];

export default function DetailsTable() {
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