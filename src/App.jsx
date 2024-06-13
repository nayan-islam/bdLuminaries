import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import ErrorPage from './page/ErrorPage';
import Home from './page/Home';
import AllProduct from './page/AllProduct';
import ContactForm from './components/Contact';
import ProductDetails from './components/ProductDetails';
import ProductDetailOne from './page/ProductDetailOne';
import Blog from './page/Blog';
import ProductDetailNext from './page/ProductDetailNext';
import Mockup from './page/Mockup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayOut />}
      // errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} />
      <Route path="/product" element={<AllProduct />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/product/detail/one" element={<ProductDetailOne />} />
      <Route path="/product/detail" element={<ProductDetails />} />
      <Route path="/product/detail/next" element={<ProductDetailNext />} />
      <Route path="/mockup" element={<Mockup />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
