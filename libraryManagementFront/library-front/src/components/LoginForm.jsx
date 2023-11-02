import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const LoginForm = () => {

  const navigate = useNavigate()
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

    axios.post('http://localhost:8080/auth', {
    username: formData.username,
    password: formData.password
    })
    .then(response => {
    console.log('Respuesta del servidor:', response.data);
    const token = response.data.token
    localStorage.setItem('token', token);
    const username = formData.username
    localStorage.setItem('user',username)
    navigate('/welcome')
    })
    .catch(error => {
    console.error('Error:', error);
    toast.error('Credenciales incorrectas. Verifica que tus credenciales son válidas.', {
      position: "top-center",
      autoClose: 1000, 
    });
    });
  };

  return (
    <div className='bg-primary h-screen w-screen flex flex-col items-center'>
      <div className='mt-10 mb-16'>
        <h1 className='text-white text-2xl'>Films Application</h1>
      </div>
    <div className="login-form bg-gray-200 h-80 w-80 rounded-lg border-second border-2">
      <h2 className='font-semibold text-center mt-5 mb-5'>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-cente" >
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className='rounded-md mt-1 text-right font-normal border border-second'
          />
        </div>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-center">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='rounded-md mt-1 text-right font-normal  border border-second'
          />
        </div>
        <button type="submit" className='mt-10 py-1 px-1 bg-alter text-white font-semibold hover:bg-gray-50 hover:text-alter hover:font-semibold hover:border-alter hover:border w-3/5 rounded-md'>
          Iniciar Sesión</button>
      </form>
    </div>

    <div className='mt-10 bg-gray-100 flex h-1/6 w-1/4 mb-5 rounded-md items-center justify-center border-4 border-third'>
      <img src='src/images/springbootlogo.png' className='h-20 w-20 '>
      </img>
      <img src='src/images/icesi.jpg' className='h-20 w-20 ml-3 '>
      </img>
      <img src='src/images/react.png' className='h-16 w-20 ml-3'>
      </img>
    </div>
    </div>
  );
};

export default LoginForm;