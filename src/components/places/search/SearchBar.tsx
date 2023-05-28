import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function SearchBar() {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <SearchIcon />
            ),
          }}
        />
      )}
    />
  );
}
