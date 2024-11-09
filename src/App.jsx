import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Comparison from './components/Comparison'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#7134eb',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {

  const [userLon, setUserLon] = React.useState(0)
  const [userLat, setUserLat] = React.useState(0)
  const [userStartDate, setUserStartDate] = React.useState("")
  const [userLastDate, setUserLastDate] = React.useState("")
  const [showImages, setShowImages] = React.useState(false)

  const handleButton = (event) => {
    event.preventDefault();
    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('latitude').value;
    const startDate = document.getElementById('firstDate').value;
    const lastDate = document.getElementById('lastDate').value;
    setUserLon(lon);
    setUserLat(lat);
    setUserStartDate(startDate);
    setUserLastDate(lastDate);
    setShowImages(true);
  }

  return (
    <>
      <ResponsiveAppBar />
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch', marginTop: '2%', height: '55px' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="longitude" label="Longitude" variant="outlined" />
        <TextField id="latitude" label="Latitude" variant="outlined" />
        <TextField id="firstDate" label="First Date" variant="outlined" />
        <TextField id="lastDate" label="Last Date" variant="outlined" />
        <Button
          size="large"
          color='primary'
          variant="contained"
          sx={{ backgroundColor: theme.palette.primary.main }}
          onClick={handleButton}>
          Submit
        </Button>
      </Box>
      {showImages && (
        <Box
          sx={{ maxWidth: '800px' }}
        >
          <Comparison
            userLon={userLon}
            userLat={userLat}
            userStartDate={userStartDate}
            userLastDate={userLastDate}
          />
        </Box>
      )}
    </>
  )
}

export default App
