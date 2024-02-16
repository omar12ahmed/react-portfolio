import { NavLink } from "react-router-dom";

function Header() {

    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{backgroundColor:"rgba(9, 1, 21, 0.122)", padding:"10px", borderRadius:"10px"}}>

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="about"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="Project-gallery"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="contact"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </nav>

        
        </>
    )
}

export default Header