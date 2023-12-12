import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const content = (
        <nav className="nav">
            <div className="header">
                <h2 className=" " href="/">DK TEK</h2>
                <div>
                    <Link className="header_link" to='/'>Home</Link> 
                    <Link className="header_link" to="/list">TodoList</Link>
                    <Link className="header_link" to="/about">About</Link>
                </div>
            </div>
        </nav>

    )
  return content
}

export default Header