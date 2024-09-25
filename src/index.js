import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router= createBrowserRouter([
  {path: "", element: <App />, children: [
    {path: "", element: <Home />},
    {path: "about", element: <About />},
    {path: "portfolio", element: <Portfolio />},
    {path: "contact", element: <Contact />},
  ]},
 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);


reportWebVitals();
