import './Navbar.scss'
import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const {pathname} =useLocation()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setActive(true) : setActive(false)
        })
        return() => {
            window.removeEventListener("scroll", () => {
                window.scrollY > 0 ? setActive(true) : setActive(false)
            })
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Xfinity",
        isSeller: true
    }

    return (
        <div className={
            active || pathname !=="/" ? "navbar active" : "navbar"
        }>
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/">
                    <span className="text">fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Businsess</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <Button>Join</Button>}
                    {
                      currentUser && <div className="user" onClick={()=>setOpen((prev)=>!prev)}>
                        <img src="" alt=" "/>
                        <span>{currentUser?.username}</span>
                        {open && (<div className="options">
                          {
                            currentUser?.isSeller &&(
                              <>
                              <Link className="link user-links" to="/gigs">Gigs</Link >
                              <Link className="link user-links" to="/add">Add New Gig</Link >
                              </>
                            )
                          }
                          <Link className="link user-links" to="/orders">Orders</Link >
                          <Link className="link user-links" to="/messages">Messages</Link >
                          <Link className="link user-links" to="/logout">Logout</Link >
                        </div>)}
                      </div>
                    }
                    
                    
                </div>

            </div>

            {
            (active || pathname!=="/") && <><hr/>
                <div className='menu'>
                    <Link className="link" >Graphics & Design</Link>
                    <Link className="link" >Video & Animation</Link>
                    <Link className="link" > Writing & Translation</Link>
                    <Link className="link" >AI Services</Link>
                    <Link className="link" >Digital Marketing</Link>
                    <Link className="link" >Music & Audio</Link>
                    <Link className="link" >Programming & Tech</Link>
                    <Link className="link" >Business</Link>
                    <Link className="link" >Lifestyle</Link>
                </div>
            </>
        } </div>
    )
}

export default Navbar
