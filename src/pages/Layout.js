import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <Link class="navbar-brand" to="#">WebSiteName</Link>
        </div>
        <ul class="nav navbar-nav">
          <Link to="/cv">Portfolio</Link>
          <Link to="/contact">CV</Link>
          <Link to="/">HomePage</Link>

        </ul>
      </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
