 import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './user/home';
import Products from './user/products';
import Cart from './user/cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
  <HomePage/>
    ),
  },
  {
    path: "/products",
    element: (
  <Products/>
    ),
  },
  {
    path: "/cart",
    element: (
  <Cart/>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
