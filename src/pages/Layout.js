import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet, Link } from "react-router-dom";
import Header from "./Header.js"


const Layout = () => {
  return (
    <div>

    <Header/>

    <div class="layout">
    <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/cv">CV</Link>
            </li>
            <li>
              <Link to="/react/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      <Outlet />
    </div>
    </div>
  )
};

export default Layout;
