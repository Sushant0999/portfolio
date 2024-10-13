import { Box } from '@mui/material';
import React from 'react'
import { ThreeDot } from 'react-loading-indicators';

export default function CustomLoading() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <ThreeDot variant="bounce" color="#32cd32" size="large" text="" textColor="#4e831f" speedPlus={1} />
    </Box>
  )
}
