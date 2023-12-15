import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Card from './components/Card/Card';
import Home from './pages/Home';

function App({children}) {

  return (
    <>    <LocalizationProvider dateAdapter={AdapterDayjs}>
    {children}
    <Router>
    <Routes>
    <Route path="/" element={<Home title="home" />}/>
    <Route path="/create-action" element={<Card title="create-action" />}/>
    </Routes>
    </Router>
{/* 
      <Home/>
      <Card/> */}
    </LocalizationProvider>

    </>
  )
}

export default App
