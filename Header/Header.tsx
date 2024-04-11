import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>

    {/* <div className="">
      <Link href={"#"} > <img width={100} height={80} src="http://127.0.0.1:5501/hariyali-abhiyan-logo-3.png" alt="" /></Link> 
    </div> */}

    {/* ==================================================================================== */}
    <div className="main-wrapper">
      <div className="header">
    <div className="header-left">
          <a href="index.html" className="logo">
            <img width={100} height={80} src="http://127.0.0.1:5501/hariyali-abhiyan-logo-3.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo d logo-small">
            <img
              src="http://127.0.0.1:5501/hariyali-abhiyan-logo-1.png"
              alt="Logo"
              width="40"
              height="40"
            />
          </a>
        </div> 

        </div> 
        </div> 
           </>
  )
}

export default Header