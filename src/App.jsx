import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import MyGigs from "./pages/myGigs/myGigs"
import Gig from "./pages/gig/Gig"
import Gigs from "./pages/gigs/Gigs"
import Home from "./pages/home/Home"
import Add from "./pages/add/Add"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import Orders from "./pages/orders/Orders"
import './App.scss'

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        
      ]
    },
  ])
  

 
  return (
    <>
      <RouterProvider router={router}/>
      
     
        
   

    </>
  )
}

export default App
