import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Logo from '../Assests/Images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          width: '96%',
          margin: 'auto',
        }}
      >
        <Paper
          elevation={5}
          sx={{
            mt: 0.5,
            position: 'sticky',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              px: '10px',
              pt: '3px',
            }}
          >
            <NavLink to="/">
              <img src={Logo} alt={'logo'} style={{ height: '50px' }} />
            </NavLink>
          </Stack>
          <Stack
            spacing={3}
            direction="row"
            mt={1}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              px: '10px',
            }}
          >
            <NavLink className="navbarstyle" to="/">
              Home
            </NavLink>
            <NavLink className="navbarstyle" to="/">
              About Us
            </NavLink>
            <NavLink className="navbarstyle" to="/signin">
              Topics
            </NavLink>
            <NavLink className="navbarstyle" to="/">
              Look in my Code
            </NavLink>
          </Stack>
          <Stack
            spacing={3}
            mt={1}
            direction="row"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              px: '10px',
            }}
          >
            <NavLink
              className="navbarstyle"
              to="/signin"
              style={{
                outline: '1px',
                outlineColor: 'var(--color-five)',
                outlineStyle: 'solid',
                borderRadius: '5px',
                height: '18px',
              }}
            >
              <Stack direction="row">
                <SearchIcon />
                <Typography variant="body-2" pl={1}>
                  Search
                </Typography>
              </Stack>
            </NavLink>
            <NavLink className="navbarstyle" to="/signin">
              Sign In
            </NavLink>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Navbar;
