import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Head.css';
import {FaShoppingCart} from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext';
import { useCart } from '../../Context/Cart';
import { toast } from 'react-hot-toast';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { Badge } from "antd";
import "./Head.css"


const Header = () => {
  const[auth,setAuth] = useAuth()
  const [cart] = useCart();
  const categories = useCategory()
  const handleLogout = ()=>{
    setAuth({
      ...auth, user:null, token:'',role: 0
    })
    localStorage.removeItem('auth')
    toast.success('Logout Succesfully')
  }
  return (
 <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" href="#">EcoNo Money</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <SearchInput/>
      <li className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink to="/" className="nav-link " href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>

     
   {
    !auth.user ? (<>
       <li className="nav-item">
        <NavLink to="/register" className="nav-link" href="#">register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
      </li>
    </>) : (  <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        
       
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {auth?.user?.name}
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`} className="dropdown-item" href="#action">DashBoard</NavLink>
              <NavLink  onClick={handleLogout}
                          to="/login" className="dropdown-item" href="#box1">Logout</NavLink>
            </div>
          </li>

          
        </ul>

        
      </div>


      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        
       
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Categories
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <li>
                    <NavLink className="dropdown-item" to={"/categories"}>
                      All Categories
                    </NavLink>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
            </div>
          </li>

          
        </ul>

        
      </div>

      <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to={"/categories"}>
                      All Categories
                    </NavLink>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>


    </nav>








                
                </>)
   }
     <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink>
              </li>
     
   
    </ul>
  
  </div>
</nav>

 </>
  )
}

export default Header
