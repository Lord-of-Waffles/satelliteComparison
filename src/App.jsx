import { useState } from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';

function App() {

  return (
    <>
      <ResponsiveAppBar />
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch', marginTop: '2%' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Longitude" variant="outlined" />
        <TextField id="outlined-basic" label="Latitude" variant="outlined" />
        <TextField id="outlined-basic" label="First Date" variant="outlined" />
        <TextField id="outlined-basic" label="Last Date" variant="outlined" />

      </Box>
      <Box>

      </Box>
    </>
  )
}

export default App
