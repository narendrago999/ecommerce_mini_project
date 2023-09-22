import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [category, setcategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setcategory(event.target.value);
  };

  return (
    <FormControl  sx={{ m: 1, width:160,background:'white',borderRadius:1 }} size="small">
      <InputLabel sx={{color:'black'}} id="demo-select-small-label">category</InputLabel>
      <Select sx={{borderColor:'white'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Kids</MenuItem>
        <MenuItem value={20}>Men</MenuItem>
        <MenuItem value={30}>Women</MenuItem>
      </Select>
    </FormControl>
  );
}