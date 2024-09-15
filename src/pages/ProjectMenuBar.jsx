// src/components/MenuBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {  Button, Box, Typography } from '@mui/material';

const MenuBar = () => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0', textAlign:'center' }}>
                <Button color="inherit" component={Link} to="/projects/type1" sx={{border: '1px solid black'}}>
                    <Typography variant='h5'>
                        DataBase Projects
                    </Typography>
                </Button>
                <Button color="inherit" component={Link} to="/projects/type2" sx={{border: '1px solid black'}}>
                    <Typography variant='h5'>
                        Backend Projects
                    </Typography>
                </Button>
                <Button color="inherit" component={Link} to="/projects/type3" sx={{border: '1px solid black'}}>
                    <Typography variant='h5'>
                        Android Projects
                    </Typography>
                </Button>
                <Button color="inherit" component={Link} to="/projects/type3" sx={{border: '1px solid black'}}>
                    <Typography variant='h5'>
                        CLI Projects
                    </Typography>
                </Button>
            </Box>
        </div>
    );
};

export default MenuBar;
