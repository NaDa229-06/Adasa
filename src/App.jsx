
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Page404 from './pages/Page404'
import About from './pages/About'
import PostDetails from './pages/PostDetails'

 const routes = createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"/home", element:<Home/>},
    {path:"/blog", element:<Blog/>},
    {path:"/about", element:<About/>},
    {path:"/blog/:slug", element:<PostDetails/>},
    {path:"*", element:<Page404/>}
  ]}
])

export default function App() {
 
  return <RouterProvider router={routes}></RouterProvider>
}

