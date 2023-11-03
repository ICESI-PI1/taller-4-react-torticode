import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/auth', {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        console.log('Respuesta del servidor:', response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        const username = formData.username;
        localStorage.setItem('user', username);
        navigate('/autores');
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Credenciales incorrectas. Verifica que tus credenciales son válidas.', {
          position: 'top-center',
          autoClose: 1000,
        });
      });
  };

  return (
    <div className="bg-primary h-screen w-screen flex flex-col items-center">
      <div className="mt-10 mb-16">
        <h1 className="text-white text-2xl">Library Management Application</h1>
      </div>
      <Card className="login-form bg-gray-200 w-80">
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;