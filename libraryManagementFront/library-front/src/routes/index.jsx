import {Route, Routes, BrowserRouter as Router, Navigate} from 'react-router-dom';
import Home from "../pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from '../pages/About'
import AuthorList from '../pages/AuthorList'
import NotFound from '../pages/NotFound'
import LoginForm from '../components/LoginForm';
import AboutParams from '../pages/AboutParams';
import AboutOtra from '../pages/AboutOtra';
import AuthorDetails from '../components/AuthorDetails';

function isToken(){
    const tok = localStorage.getItem('token')
    return tok !== null
}

const ProtectedRoute = ({element}) => {
  return isToken() ? element : <Navigate to="/login" replace />;
};

const RoutesApp = () => {
    return (
        <Router>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path='/' element={isToken() ? <Navigate to='/autores'></Navigate> : <LoginForm />} />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute 
                  element={
                    <Routes>
                      <Route path="/" element={<About />}>
                        <Route path=":id" element={<AboutParams/>} />
                        <Route path='otra' element={<AboutOtra/>} />
                      </Route>
                    </Routes>
                  }
                />
              }
            />
            <Route 
              path="/autores" 
              element={
                <ProtectedRoute 
                  element={
                    <Routes>
                      <Route path="/" element={<AuthorList />}/>
                      <Route path=":id" element={<AuthorDetails/>} /> 
                    </Routes>
                  }
                />
              }
            />
          </Routes>
        </Router>
      );
};

export default RoutesApp;