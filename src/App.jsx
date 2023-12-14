import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Card from './components/Card/Card';

function App({children}) {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <Card/>
    </LocalizationProvider>

    </>
  )
}

export default App
