import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <div className="header-head">
                <img src=".my-app\public\avatar-profession-illustration-eps-436897027.jpg" alt="profile" />
                <div className="header-text">
                    <span>Yasaman Edrisian</span>
                    <span></span>
                </div>
            </div>
            <div className="header-body">
                <Link to='/'>About</Link>
                <Link to='/'>Work</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </header>
    )
}
