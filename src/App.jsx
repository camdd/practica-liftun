import OptionSwitch from './components/OptionSwitch'
import ActionSelector from './components/ActionSelector'
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import  Calendar  from './components/Calendar'
import ActionButton from './components/ActionButton';


function App({children}) {


  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <OptionSwitch/>
      <ActionSelector/>
    <Calendar/>
    <ActionButton/>
    </LocalizationProvider>

    </>
  )
}

export default App
