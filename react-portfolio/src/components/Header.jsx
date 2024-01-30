import { NavLink } from "react-router-dom";

function Header(){

    return(
        <ul className = "nav nav-tabs">
            <li className="nav-item">
                <NavLink 
                to= "/"
                end
                className={({isActive})=>
                isActive ? "nav-link active":"nav-link"
            }
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                    <NavLink
                    to= "about"
                    className={({isActive})=>
                    isActive ? "nav-link active": "nav-link"
                }
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                    to= "work"
                    className={({isActive})=>
                    isActive? "nav-link active": "nav-link"
                }
                    >
                        Work
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                    to="contact"
                    className={({isActive})=>
                    isActive? "nav-link active": "nav-link"
                }
                    >
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                    to="ProjectGallery"
                    className={({isActive})=>
                    isActive? "nav-link active": "nav-link"
                }
                    >
                        Project Gallery
                    </NavLink>
                </li>
        </ul>
    )
}

export default Header