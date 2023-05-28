import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './BookingCalendar.css'; // Импортируем файл стилей

const BookingCalendar: React.FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
                    // @ts-ignore

    <div className="react-calendar">
      <DateRange
        editableDateInputs={true}
                        // @ts-ignore

        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
                        // @ts-ignore

        ranges={state}
      />
    </div>
  );
};

export default BookingCalendar;
