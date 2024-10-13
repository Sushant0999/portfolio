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
import { getToken } from '../service/login';
import { useNavigate } from 'react-router-dom';


export default function login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validateInputs = () => {
    let valid = true;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateInputs()) {
      console.log('Email:', email);
      console.log('Password:', password);
      const data = await getToken(email, password);
      if (data.success) {
        navigate('/dashboard');
      } else {
        console.error(data.message);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '90vh' }}>
      <CssBaseline />
      <Card sx={{ padding: 4, marginTop: 8 }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            Login
          </Button>
          <Typography>
            Don't have an account?{' '}
            <Link href="/signup" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
