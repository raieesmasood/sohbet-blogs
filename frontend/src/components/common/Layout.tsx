import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
import React from 'react';

const Layout = () => (
  <div className="d-flex flex-column min-vh-100">
  
    <main className="flex-grow-1 container mx-auto px-4 py-8">
      <Outlet />
    </main>
  </div>
);

export default Layout;
