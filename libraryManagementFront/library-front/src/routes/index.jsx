import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import AuthorList from '../pages/AuthorList'; // Componente para listar todos los autores
//import AuthorDetail from '../pages/AuthorDetail'; // Componente para mostrar detalles de un autor
//import AuthorCreate from '../pages/AuthorCreate'; // Componente para crear un nuevo autor
//import AuthorUpdate from '../pages/AuthorUpdate'; // Componente para actualizar un autor
//import AuthorBooks from '../pages/AuthorBooks'; // Componente para listar los libros de un autor
//import NotFound from '../pages/NotFound';

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/autores" element={<AuthorList />} /> // Ruta para listar todos los autores
        </Routes>
    </BrowserRouter>
)

export default Router;