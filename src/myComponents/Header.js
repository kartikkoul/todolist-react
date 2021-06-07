import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <div className='headerOuter'>
            <div className="headerInner">
                <nav className="navbar">
                    <ul className="navItems">
                        <li className="itemOne"><a href="">{props.item1}</a></li>
                        <li className="itemTwo"><a href="">{props.item2}</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
