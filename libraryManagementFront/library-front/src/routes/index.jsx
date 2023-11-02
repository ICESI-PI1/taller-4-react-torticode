import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import AuthorList from '../pages/AuthorList';
import NotFound from '../pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isToken(){
    const token = localStorage.getItem('token')
    console.log(token)
    return token !== null
}

const ProtectedRoute = ({ element }) => {
    return isToken() ? element : <Navigate to="/login" />;
};

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/autores" element={<AuthorList />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
        <ToastContainer/>
    </Router>
)

export default AppRouter;