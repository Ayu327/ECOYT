
import {Routes,Route} from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/Policy';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import Register from './pages/Auth/Register';
import toast, { Toaster } from 'react-hot-toast';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './component/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

import MyNavbar from './component/Layout/drop';
import AdminRoute from './component/Routes/AdminRoute';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Product';



function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
      <Route path='/*' element={<PageNotFound/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>} >
      <Route path="user" element={<Dashboard/>}/>
      <Route path='user/orders' element={<Orders/>}/>
      <Route path='user/profile' element={<Profile/>}/>
       </Route>

       <Route path='/dashboard' element={<AdminRoute/>} >
      <Route path="admin" element={<AdminDashBoard/>}/>
      <Route path='admin/create-category' element={<CreateCategory/>}/>
      <Route path='admin/products' element={<Products/>}/>
      <Route path='admin/create-product' element={<CreateProduct/>}/>
       </Route>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
  <Route path='/drop' element={<MyNavbar/>}/>
     
    </Routes>
   <Footer/>
    </>
  );
}

export default App;
