import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav class="bg-blue-500">
   
   <ul class="flex items-center justify-between px-4 py-2">
       
         
          <li>
          <Link to="/categories" class="text-white hover:underline">Categories</Link>
        </li>
        <li>
          <Link to="/products" class="text-white hover:underline">Products</Link>
        </li>
        <li>
          <Link to="/contact" class="text-white hover:underline">Contact</Link>
        </li>
        <li>
          <Link to="/post" class="text-white hover:underline">Post</Link>
        </li>
      </ul>
   </nav>


  );
}

export default Navbar;
