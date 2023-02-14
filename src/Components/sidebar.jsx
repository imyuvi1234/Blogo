import { Box, Paper } from '@mui/material';
import React from 'react'

function Sidebar() {
  return (
    <React.Fragment>
            <Box>
                <Paper elevation={5} sx={{mt: 5, padding: '25px',  opacity: 0.9, backgroundColor: 'var( --color-two )'}}>
                 
                </Paper>
            </Box>
    </ React.Fragment>
  )
}

export default Sidebar;