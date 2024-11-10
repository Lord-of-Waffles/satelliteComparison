import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Comparison from './components/Comparison';
import ClickableMap from './components/ClickableMap';
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

//By Benjamin Worton and Panos Arvanitakis

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
  const [userLon, setUserLon] = React.useState(0);
  const [userLat, setUserLat] = React.useState(0);
  const [userStartDate, setUserStartDate] = React.useState(dayjs()); // Initialize as dayjs object
  const [userLastDate, setUserLastDate] = React.useState(dayjs());   // Initialize as dayjs object
  const [showImages, setShowImages] = React.useState(false);

  const handleButton = (event) => {
    event.preventDefault();
    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('latitude').value;

    // Format dates as strings right before using them
    const startDate = userStartDate.format("YYYY-MM-DD");
    const lastDate = userLastDate.format("YYYY-MM-DD");

    setUserLon(lon);
    setUserLat(lat);
    setShowImages(true);
  };

  // Function to handle map click events and set coordinates
  const handleMapClick = (lon, lat) => {
    setUserLon(lon);
    setUserLat(lat);
    document.getElementById('longitude').value = lon;
    document.getElementById('latitude').value = lat;
  };

  return (
    <>
      <ResponsiveAppBar />
      <Typography variant="h5">Add your coordinates & date here...</Typography>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch', marginTop: '2%', height: '55px' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="longitude"
          type="number"
          label="Longitude"
          variant="outlined"
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField
          id="latitude"
          type="number"
          label="Latitude"
          variant="outlined"
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={userStartDate} // Bind to state
            onChange={(newDate) => setUserStartDate(newDate)} // Update state on change
            label="First Date"
            format="YYYY-MM-DD"
          />
          <DatePicker
            value={userLastDate} // Bind to state
            onChange={(newDate) => setUserLastDate(newDate)} // Update state on change
            label="Last Date"
            format="YYYY-MM-DD"
          />
        </LocalizationProvider>
        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ backgroundColor: theme.palette.primary.main }}
          onClick={handleButton}
        >
          Submit
        </Button>
      </Box>
      {showImages && (
        <Box sx={{ maxWidth: '800px' }}>
          <Comparison
            userLon={userLon}
            userLat={userLat}
            userStartDate={userStartDate.format("YYYY-MM-DD")} // Pass as formatted string
            userLastDate={userLastDate.format("YYYY-MM-DD")}   // Pass as formatted string
          />
        </Box>
      )}
      <ClickableMap onMapClick={handleMapClick} />
    </>
  );
}

export default App;
