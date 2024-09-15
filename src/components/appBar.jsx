import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Use react-scroll for smooth scrolling
import '../css/appBar.css';
import {NAVBAR_COLOR} from '../utils/constants'

export default function CustomAppBar() {
  return (
    <AppBar sx={{backgroundColor: {NAVBAR_COLOR}}}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            My Portfolio
          </Typography>
        </Box>
        {/* Navbar Links */}
        <Button color="inherit">
          <ScrollLink to="experience" smooth={true} duration={500}>
            Experience
          </ScrollLink>
        </Button>
        <Button color="inherit">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </Button>
        <Button color="inherit">
          <ScrollLink to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
