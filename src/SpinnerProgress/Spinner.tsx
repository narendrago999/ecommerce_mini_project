import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <Stack sx={{ color: 'grey.500',display:'flex',alignItems:'center',justifyContent:'center',marginTop:30 }} spacing={2} direction="row">
      <CircularProgress color="secondary"   />
    </Stack>
  );
}