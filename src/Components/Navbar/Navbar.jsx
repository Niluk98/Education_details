import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate();
  return (
    <>
   
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Education Details
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'5rem'}}>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" style={{cursor:'pointer'}} onClick={()=>{navigate('home')}}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{cursor:'pointer'}}  onClick={()=>{navigate('products')}}>
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{cursor:'pointer'}} onClick={()=>{navigate('categories')}}>
                Categories
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " style={{cursor:'pointer'}} onClick={()=>{navigate('contacts')}}>Education</a>
            </li>
          </ul>
        </div>
        <form class="form-inline my-2 my-lg-0">
      
      {/* {isLoggedIn===false?<button class="btn btn-success my-2 my-sm-0" type="submit" onClick={(e)=>{e.preventDefault();setIsLoggedIn(true);navigate('login')}}>Login</button>:<button class="btn btn-danger my-2 my-sm-0" type="submit" onClick={(e)=>{e.preventDefault();setIsLoggedIn(false)}}>Logout</button>} */}
      <button class="btn btn-success my-2 my-sm-0" type="submit" onClick={(e)=>{e.preventDefault();setIsLoggedIn(true);navigate('login')}}>Login</button>
    </form>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
