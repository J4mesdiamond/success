import React from 'react'
import logo from './log.png'
import './App.css'

const Access = () => {
    return (
        <div className="access">
            <div className="pad">
                <div className="col">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h1>ACCESS</h1>
                    </div>
                    <h3>Experience a new era of <span>WEALTH</span> management with Access.</h3>
                    <p>
                        Access is a technology powered, digital family office for the high-net-worth
                        population. Discover alternative investments with lower minimums, diversify your
                        portfolio, and connect with other top investors who are investors who are investing
                        alongside you.
                    </p>
                    <div className="line"></div>
                    <h2><span>ACCESS</span> Investing in the future, together.</h2>
                    <label htmlFor="" className='lab'>Stay tuned for our upcoming launch and receive updates:</label>
                    <div className="row">
                        <input type="email" name="" id="" placeholder='youremail@domain.com' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Access