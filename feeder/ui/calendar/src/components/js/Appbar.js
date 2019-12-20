import React from 'react';
import '../css/appbar.css'

function AppBar() {
    
    return (
        <div className="appBarBody">
            <span className="loginbutton">
                <button>Login</button>
                </span>
            <span>Meet-Ups Calander</span>
            <span className="settingsbutton">
                <button>Settings</button></span>
        </div>
    )
}

export default AppBar