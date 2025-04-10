import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Router, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/Profile',
    element: <Profile />
  },
  {
    path:'/Contact',
    element: <Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
