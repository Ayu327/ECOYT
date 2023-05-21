import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Head.css';
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  return (
 <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" href="#">EcoNo Money</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink className="nav-link " href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/register" className="nav-link" href="#">register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/cart" className="nav-link" href="#"><FaShoppingCart/>(0)</NavLink>
      </li>
     
   
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 </>
  )
}

export default Header