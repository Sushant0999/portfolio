import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  Container,
  CssBaseline,
  Grid,
} from '@mui/material';
import InputList from './InputList';
import { updateUser } from '../service/updateUser';

const CustomForm = ({ userData }) => {

  console.log(userData.certificates);

  const [formData, setFormData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    password: userData?.password || '',
    bio: userData?.bio || '',
    profilePic: userData?.profilePic || '',
    location: userData?.location || '',
    linkedinUrl: userData?.linkedinUrl || '',
    githubUrl: userData?.githubUrl || '',
    projects: userData?.projects || [],
    skills: userData?.skills || [],
    experiences: userData?.experiences || [],
    educationList: userData?.educationList || [],
    contacts: userData?.contacts || [],
    certificates: userData?.certificates || [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleItemsChange = (key, newItems) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: newItems,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here (e.g., send to an API)
    const data = await updateUser(formData);
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Card sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5">
          User Information Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            multiline
            rows={3}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Profile Picture URL"
            name="profilePic"
            value={formData.profilePic}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="LinkedIn URL"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="GitHub URL"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
          />
          <InputList
            label="Project"
            name="projects"
            initialItems={formData.projects}
            fields={[
              { key: 'title', label: 'Title' },
              { key: 'description', label: 'Description' },
              { key: 'endDate', label: 'End Date' },
              { key: 'startDate', label: 'Start Date' },
              { key: 'techStack', label: 'Tech Stack' },
              { key: 'liveDemoUrl', label: 'Live Demo' },
              { key: 'githubUrl', label: 'Github Url' },
              // Add more fields if needed
            ]}
            onItemsChange={(newItems) => handleItemsChange('projects', newItems)}
          />

          <InputList
            label="Skill"
            name="skills"
            initialItems={formData.skills}
            fields={[
              { key: 'skillName', label: 'Skill Name' },
              { key: 'proficiency', label: 'Skill Level' },
            ]}
            onItemsChange={(newItems) => handleItemsChange('skills', newItems)}
          />

          <InputList
            label="Experience"
            name="experiences"
            initialItems={formData.experiences}
            fields={[
              { key: 'jobTitle', label: 'Job Title' },
              { key: 'description', label: 'Description' },
              { key: 'companyName', label: 'Company' },
              { key: 'startDate', label: 'Start Date' },
              { key: 'endDate', label: 'End Date' },
              { key: 'location', label: 'Location' },

              // Add more fields if needed
            ]}
            onItemsChange={(newItems) => handleItemsChange('experiences', newItems)}
          />

          <InputList
            label="Certificate"
            name="certificates"
            initialItems={formData.certificates}
            fields={[
              { key: 'title', label: 'Certificate Name' },
              { key: 'issueDate', label: 'Issued Date' },
              { key: 'organization', label: 'Organization' },

              // Add more fields if needed
            ]}
            onItemsChange={(newItems) => handleItemsChange('certificates', newItems)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default CustomForm;
