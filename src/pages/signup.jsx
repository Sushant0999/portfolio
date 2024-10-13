import * as React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  Container,
  CssBaseline,
  Link,
} from '@mui/material';

export default function signUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError('Name is required.');
      valid = false;
    } else {
      setNameError('');
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      // Handle signup logic here
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{height: '90vh'}}>
      <CssBaseline />
      <Card sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!nameError}
            helperText={nameError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Typography>
            Already have an account?{' '}
            <Link href="/login" variant="body2">
              Log In
            </Link>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
