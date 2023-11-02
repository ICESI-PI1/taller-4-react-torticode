import axios from 'axios'

//Debo agregar la ruta en la que se ejecuta la API-Rest
const instance = axios.create({baseURL:"http://localhost:8080",})
// Agregar un interceptor de solicitud para agregar automáticamente el token JWT
instance.interceptors.request.use((config) => {
    // Obtener el token JWT del almacenamiento local 
    const token = localStorage.getItem('token');
  
    // Si el token existe, agregarlo al encabezado de autorización
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  

export default instance