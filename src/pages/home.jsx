import React, { useState, useEffect } from 'react';
import CustomAppBar from '../components/appBar';
import { Box, Typography, Container, Paper } from '@mui/material';
import '../css/home.css';
import { getUser } from '../service/getUser';
import CustomBubble from '../components/CustomBubble';
import MenuBar from './ProjectMenuBar';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Define the async function to fetch user data
    const getData = async () => {
      try {
        const data = await getUser(); // Call the getUser service
        setUserData(data); // Set the fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Stop loading if an error occurs
      }
    };

    getData(); // Call the async function when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while waiting for the data
  }

  return (
    <div>
      <CustomAppBar />
      <Container maxWidth={false} disableGutters>
        <Box 
          sx={{ 
            margin: '20px 0', 
            padding: '20px', 
            textAlign: 'center',
            minHeight: '90vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'darkblue'
          }}
        >
          <Typography variant='h6'>
            Hello, I am
          </Typography>
          <Typography variant='h1'>
            {userData?.name} {/* Display fetched user name */}
          </Typography>
          <Typography variant='body1'>
            {userData?.bio} {/* Display fetched user bio */}
          </Typography>
        </Box>

        {/* Experience Section */}
        <Box 
          id="experience"
          sx={{ 
            margin: '20px 0', 
            padding: '20px',
            minHeight: '100vh',  // Full screen height for experience
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'teal'

          }}
        >
          <Typography variant='h4' gutterBottom>
            Experience
          </Typography>
          <Typography variant='body1'>
            {/* Experience details */}
            - Over 1 year of experience with Java Spring Boot and FastAPI.
            <br />
            - Worked on Management Information System (MIS) portals.
            <br />
            - Expertise in MLOps integration and secured endpoints with JWT.
          </Typography>
        </Box>

        {/* Projects Section */}
        <Box 
          id="projects"
          sx={{ 
            margin: '20px 0', 
            padding: '0 20px 0 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            backgroundColor: 'purple'
          }}
        >
          {/* <Typography variant='h4' gutterBottom>
            Projects
          </Typography>
          <Typography variant='body1'>
            - Developed a case study module to allow sorting and marketing team acceptance.
            <br />
            - Implemented multiple @Scheduled tasks in a Spring Boot application.
          </Typography> */}
          <MenuBar />
        </Box>

        {/* Skills Section */}
        <Box 
          id="skills"
          sx={{ 
            margin: '20px 0', 
            padding: '20px',
            minHeight: '100vh',  // Full screen height for skills
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'skyblue'
          }}
        >
          <Typography variant='h4' gutterBottom>
            Skills
          </Typography>
          <Typography variant='body1'>
            {/* Skills details */}
            - Java, Spring Boot, FastAPI, Python, MLOps, JWT Authentication.
            <br />
            - React, Vite, REST APIs, Microservices architecture.
          </Typography>
          <CustomBubble />
        </Box>
      </Container>
    </div>
  );
}
