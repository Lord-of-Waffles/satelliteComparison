import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Comparison from './components/Comparison'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
  const [userFirstDate, setUserFirstDate] = React.useState(0)
  const [userLastDate, setUserLastDate] = React.useState(0)
  const [showImages, setShowImages] = React.useState(false)


  const handleButton = (event) => {
    event.preventDefault();
    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('latitude').value;
    const firstDate = document.getElementById('first-date').value;
    const lastDate = document.getElementById('last-date').value;
    setUserLon(lon);
    setUserLat(lat);
    setUserFirstDate(firstDate);
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
        <TextField id="first-date" label="First Date" variant="outlined" />
        <TextField id="last-date" label="Last Date" variant="outlined" />
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
          sx={{ maxHeight: '100px', maxWidth: '200px' }}
        >
          <Comparison
            userLon={userLon}
            userLat={userLat}
            userFirstDate={userFirstDate}
            userLastDate={userLastDate}
          />
        </Box>
      )}
    </>
  )
}

export default App
