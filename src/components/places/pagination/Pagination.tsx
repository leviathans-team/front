import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function ControlledPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination count={10} page={page} onChange={handleChange} />
  );
}
