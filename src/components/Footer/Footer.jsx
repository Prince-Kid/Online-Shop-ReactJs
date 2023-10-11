import React from 'react'
import "./style.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='continer grid2'>
          <div className="box">
            <h1>Prince</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis maxime architecto! Corporis inventore optio quod expedita voluptatem delectus obcaecati, labore nihil quibusdam nemo non architecto odio veniam possimus explicabo.</p>
            <div className="icon d_flex">
               <div className="img d_flex">
                  <i className='fa-brands fa-google-play'></i>
                  <span>Google Play</span>
               </div>
               <div className="img d_flex">
                  <i className='fa-brands fa-app-store-ios'></i>
                  <span>App Store</span>
               </div>
            </div>
          </div>
          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Kigali ,Rwanda  </li>
              <li>Email: mucyoprinc12@gmail.com</li>
              <li>Phone: +250783154587</li>
            </ul>
            <div className="socialMedia links">
                    <a href="https://www.linkedin.com/in/mucyo-prince-29321421b/" className='linkedIn' style={{"--color": "#0072b1"}}>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='instagram' style={{"--color":"#E1306c"}}>
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='facebook' style={{"--color":"#4267B2"}}>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='twitter' style={{"--color":"#01C2F7"}}>
                        <i className='fa-brands fa-twitter'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='tiktok' style={{"--color":"#FF0050"}}>
                        <i className='fa-brands fa-tiktok'></i>
                    </a>
                    <a href="https://twitter.com/mucyoprince12" className='github'style={{"--color" :"white"}}>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
