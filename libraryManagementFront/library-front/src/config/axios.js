import axios from 'axios'

//Debo agregar la ruta en la que se ejecuta la API-Rest
const instance = axios.create({baseURL:"http://localhost:8080/autores"})

export default instance