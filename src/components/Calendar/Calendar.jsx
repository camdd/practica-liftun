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
                name="date_from"
                rules={{ required: true }}
                render={({ field }) => {
                    return (
                        <DatePicker
                            label="Desde"
                            value={field.value}
                            inputRef={field.ref}
                            onChange={(date) => {
                                field.onChange(date);
                            }}
                        />
                    );
                }}/>


            <Controller
                control={control}
                name="date_to"
                rules={{ required: true }}
                render={({ field }) => {
                    return (
                        <DatePicker
                            label="Hasta"
                            value={field.value}
                            inputRef={field.ref}
                            onChange={(date) => {
                                field.onChange(date);
                            }}
                        />
                    );
                }}/>

        </DemoContainer>
        </div>
        
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
