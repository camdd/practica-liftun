import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import './Calendar.css'

const Calendar = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));


  return (
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="calendar">
        
        <input
          type="text"
          className="calendarInput"
          /* placeholder="Seleccionar fecha" */
          readOnly 
        />
        <div className="container">
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker className="calendarDates" label="Desde" defaultValue={dayjs("2022-04-17")} />
          
          <DatePicker
            className="calendarDates"
            label="Hasta"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
        </div>
        
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
