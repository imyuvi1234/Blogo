import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Paper, Stack} from '@mui/material';




const Navbar = () => {
  return (
     <>
            <Container >
                  <Paper elevation={5} sx={{width: '50%', margin: 'auto', mt: 1, position: 'sticky'}}>
                        <Stack spacing={3} direction="row" sx={{padding: '10px', display:"flex", justifyContent:"space-around"}}>
                              
                              <NavLink style={{textDecoration: 'none'}} to="/">Home</NavLink>
                              <NavLink style={{textDecoration: 'none'}} to="/signin">Sign In</NavLink>
                              
                        </Stack> 
                  </Paper>
            </Container>        
     </>
  )
}

export default Navbar;
