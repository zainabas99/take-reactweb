import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Contact from './Pages/Contact';
import Post from './Pages/Post';
import Navbar from './layout/Navbar';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
function App() {
  return (
    <>
     <Navbar />
<Routes>

<Route path='/Categories' element={<Categories/>} />
<Route path='/products' element={<Products/>} />
<Route path='/Contact' element={<Contact/>} />
<Route path='/post' element={<Post/>} />
</Routes>
    </>
    );
  }
  export default App;

