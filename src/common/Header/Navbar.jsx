import React, { useState } from 'react'
import { Link } from 'react-router-dom'

  
const Navbar = () => {

    const [MobileMenu ,setMobileMenu] =  useState(false)
  return (
    <>
      <header>
        <div className="container d_flex">
            <div className="categories d_flex">
                <span className='fa-solid fa-border-all'></span>
                <h4>
                    Categories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>
            <div className="navlinks">
                <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize" } onClick={() =>setMobileMenu(false)}>
                    <li>
                        <Link to="/">Home</Link>
                      
                    </li>
                    <li>
                        <Link to="/Pages">pages</Link>
                    </li> 
                     <li>
                        <Link to="/User">User Account</Link>
                    </li>
                    <li>
                        <Link to="/Vendor">Vendor Account</Link>
                    </li>
                    <li>
                        <Link to="/Track">Track My Order</Link>
                    </li>
                    <li>
                        <Link to="/Conatct">Contact</Link>
                    </li>
                </ul>
                <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                    {MobileMenu ? <i className='fas fa-times close home-bth'></i> :
                        <i className='fas fa-bars open'></i>
                        
                    }
                </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
