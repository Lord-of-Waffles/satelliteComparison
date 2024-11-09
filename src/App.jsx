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

  return (
    <>
      <ResponsiveAppBar />
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch', marginTop: '2%', height: '55px' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Longitude" variant="outlined" />
        <TextField id="outlined-basic" label="Latitude" variant="outlined" />
        <TextField id="outlined-basic" label="First Date" variant="outlined" />
        <TextField id="outlined-basic" label="Last Date" variant="outlined" />
        <Button
          size="large"
          color='primary'
          variant="contained"
          sx={{ backgroundColor: theme.palette.primary.main }}>
          Submit
        </Button>
      </Box>

      <Box
        sx={{ maxHeight: '100px', maxWidth: '200px' }}
      >
        <Comparison />
      </Box>
    </>
  )
}

export default App
