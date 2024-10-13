import React, { useState } from 'react';
import { Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MenuBar = ({ projectList }) => {
    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState('');

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = (projectType) => {
        setCurrentProject(projectType);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const projectLinks = [
        { label: 'DataBase Projects' },
        { label: 'Backend Projects' },
        { label: 'Android Projects' },
        { label: 'CLI Projects' },
    ];

    console.log(projectList);

    return (
        <div style={{ backgroundColor: 'red' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0', textAlign: 'center' }}>
                {projectLinks.map((project, index) => (
                    <Button
                        key={index}
                        color="inherit"
                        onClick={() => handleClickOpen(project.label)}
                        sx={{ border: '1px solid black' }}
                    >
                        <Typography variant='h5'>
                            {project.label}
                        </Typography>
                    </Button>
                ))}
            </Box>

            <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                <DialogTitle>{currentProject}</DialogTitle>
                <DialogContent sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6">
                        You have selected {currentProject}. What would you like to do next?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MenuBar;
