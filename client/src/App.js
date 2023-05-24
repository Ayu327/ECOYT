
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
      <Route path="" element={<Dashboard/>}/>
      </Route>
     
    </Routes>
   <Footer/>
    </>
  );
}

export default App;
