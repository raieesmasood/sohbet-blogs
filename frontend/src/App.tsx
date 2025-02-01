import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/common/Layout';
import Home from './pages/Home.tsx';
import AllPages from './pages/AllPages.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Navbar from './components/common/Navbar.tsx';
import Footer from './components/common/Footer.tsx'

// import AdminDashboard from './pages/AdminDashboard.tsx';



function App() {
 
  return (

    <BrowserRouter>
    <Navbar/>
  
      <Routes>
        {/* <Route path="/" element={<Layout />}/> */}
     
      
          <Route path='/' element = {<Home/>}/>
          <Route path='/allsohbat' element = {<AllPages/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          {/* <Route path='/admin' element = {<AdminDashboard/>}/> */}
        
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;