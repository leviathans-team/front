import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function ControlledPagination() {
  const [page, setPage] = React.useState(1);
              // @ts-ignore

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
                // @ts-ignore

    <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      {/* Закрепляем компонент внизу с помощью CSS-стилей */}
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
