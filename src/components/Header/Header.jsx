import React from 'react'
import "./Header.css"
// import logo from "../../assets/ChefMateLogo.png"
// import text from "../../assets/ChefMateText.png"
import text from "../../assets/ChefMateText.png"

function Header() {
    return (
        <header>
            <div className="header">
                <video className='header-vid' autoPlay loop muted playsInline>
                    <source src="https://cdn-icons-mp4.flaticon.com/512/12817/12817462.mp4" type="video/mp4" />
                </video>
                
                <img className="header-img" src={text} alt="Chef Mate Text" />
            </div>
        </header>
    )
}

export default Header
