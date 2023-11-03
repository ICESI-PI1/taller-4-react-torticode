import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import  Home from  "../pages/Home"
import About from '../pages/About'
import AuthorList from '../pages/AuthorList'
import NotFound from '../pages/NotFound'
import LoginForm from '../components/LoginForm';
import AboutParams from '../pages/AboutParams';
import AboutOtra from '../pages/AboutOtra';

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginForm />}/>
            <Route path="/about" element={<About />}>
                <Route path=":id" element={<AboutParams/>} />
                <Route path='otra' element={<AboutOtra/>} />
            </Route>
            <Route path="/autores" element={<AuthorList />}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router