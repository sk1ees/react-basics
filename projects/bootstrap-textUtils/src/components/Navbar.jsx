import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    const textToggle = props.mode == "light" ? "black" : "light"

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
                <div className="container-fluid ">
                    <Link className={`navbar-brand text-${textToggle}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${textToggle}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><div className=""></div>
                                <Link className={`nav-link text-${textToggle}`} to="/about">{props.aboutText}</Link>
                            </li>


                        </ul>
                        <select className="form me-4 rounded-5 px-2" aria-label="Default select example" defaultValue={""} onChange={(e) => {
                            themeGet(e)
                        }}>
                            <option defaultValue={""}>Select Theme</option>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="mood">Mood</option>
                            <option value="zen">Zen Mode</option>
                        </select>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className={`form-check-label text-${textToggle
                                    }`} htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string, }


export default Navbar
