import './Navbar.scss'
import { useState } from 'react'
const Navbar = () => {
  const [active,setActive]=useState(true)

  return (
    <div className={active?"navbar active":"navbar"}>
        <div className="container">
            <div className="logo">
                <span className="text">fiverr</span>
<span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Businsess</span><span>Explore</span><span>English</span><span>Sign in</span><span>Become a seller</span>
            <button>Join </button>
            </div>

        </div>
        <hr/>
        <div className='menu'>
          <span>Test2</span><span>Test3</span>
        </div>
    </div>
  )
}

export default Navbar