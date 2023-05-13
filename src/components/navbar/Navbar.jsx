import './Navbar.scss'
import {useEffect, useState} from 'react'
const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
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
            active ? "navbar active" : "navbar"
        }>
            <div className="container">
                <div className="logo">
                    <span className="text">fiverr</span>
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
                              <span>Gigs</span>
                              <span>Add New Gig</span>
                              </>
                            )
                          }
                          <span>Orders</span>
                          <span>Messages</span>
                          <span>Logout</span>
                        </div>)}
                      </div>
                    }
                    
                    
                </div>

            </div>

            {
            active && <><hr/>
                <div className='menu'>
                    <span>Test2</span>
                    <span>Test3</span>
                </div>
            </>
        } </div>
    )
}

export default Navbar
