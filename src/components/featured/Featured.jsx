import React from 'react'
import './Featured.scss'
import Slide from '../slide/Slide'

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>
                    Find the perfect freelance services for your business
                </h1>
                <div className="search">
                    <div className="searchinput">
                        <img src="" alt="" />
                        <input type="text" placeholder="Try 'building mobile app'"/>

                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>AI & ML </button>
                    <button>Logo Design</button>
                    <button>Animation </button>

                </div>
            </div>
            <div className="right">
                <img src="" alt=" /"/>
            </div>
        </div>
        <Slide/>
    </div>
  )
}

export default Featured