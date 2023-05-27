import React from 'react';
import { NavLink } from 'react-router-dom';
const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        
       
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink to='/dashboard' className="dropdown-item" href="#action">Action</NavLink>
              <NavLink className="dropdown-item" href="#box1">Box 1</NavLink>
              <NavLink className="dropdown-item" href="#box2">Box 2</NavLink>
              <NavLink className="dropdown-item" href="#box3">Box 3</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
