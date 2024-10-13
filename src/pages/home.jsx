import React, { useState, useEffect } from 'react';
import CustomAppBar from '../components/appBar';
import { Box, Typography, Container } from '@mui/material';
import '../css/home.css';
import { getUser } from '../service/getUser';
import CustomBubble from '../components/CustomBubble';
import MenuBar from './ProjectMenuBar';
import CustomLoading from '../components/CustomLoading';
import VerticalLinearStepper from '../components/VerticalStepper';


export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getUser();
        setUserData(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div><CustomLoading /></div>;
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
            // backgroundColor: 'darkblue'
          }}
        >
          <Typography variant='h6'>
            Hello, I am
          </Typography>
          <Typography variant='h1' className='threeD'>
            {userData?.name || "NaN"}
          </Typography>
          <Typography variant='body1'>
            {userData?.bio || "Nan"}
          </Typography>
        </Box>


        <Box
          id="experience"
          sx={{
            margin: '20px 0',
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // backgroundColor: 'teal'

          }}
        >
          <VerticalLinearStepper experienceList={userData.experiences} />
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
            // backgroundColor: 'purple'
          }}
        >
          <MenuBar projectList={userData.projects}/>
        </Box>

        {/* Skills Section */}
        <Box
          id="skills"
          sx={{
            margin: '20px 0',
            padding: '20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // backgroundColor: 'skyblue'
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
