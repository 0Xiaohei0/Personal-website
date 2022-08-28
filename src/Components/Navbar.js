import React from "react"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar--nameContainer">
                <p className="navbar--name">Sicheng Yi</p>
                <p className="navbar--role">Web and game developer</p>
            </div>
            <div className="navbar--linkContainer">
                <p className="navbar--link">About</p>
                <p className="navbar--link">Skills</p>
                <p className="navbar--link">Experience</p>
                <p className="navbar--link">Projects</p>
                <p className="navbar--link">Contact</p>
            </div>
        </nav>
    )
}