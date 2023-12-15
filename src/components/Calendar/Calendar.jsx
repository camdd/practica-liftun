/* eslint-disable react/prop-types */
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {Controller} from "react-hook-form"
import './Calendar.css'

const Calendar = ({control}) => {

  return (
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="calendar">
        <div className="container">
        <DemoContainer components={["DatePicker", "DatePicker"]}>
        <Controller
            control={control}
            name="desde"
            render={({ field }) => (
              <DatePicker
                label="Desde"
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
                renderInput={(params) => <input {...params} />}
              />
            )}
          />
          
          <Controller
            control={control}
            name="hasta"
            render={({ field }) => (
              <DatePicker
                label="Hasta"
                value={field.value}
                onChange={(newValue) => field.onChange(newValue)}
                renderInput={(params) => <input {...params} />}
              />
            )}
          />
        </DemoContainer>
        </div>
        
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
