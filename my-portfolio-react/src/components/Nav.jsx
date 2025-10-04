import { Link as ScrollLink } from "react-scroll"
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav id="main-navigation">
            <ul>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="wrap-profile"
                          spy={true}
                          activeClass="visited"
                          offset={-100}
                          duration={500}
                          className="link_nav">Home</ScrollLink>
                    ) : (
                        <NavLink to="/" className="link_nav">Home</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="about-me"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav">About</ScrollLink>
                    ) : (
                        <NavLink to="/#about-me" className="link_nav">About</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="highlights"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav">Highlights</ScrollLink>
                    ) : (
                        <NavLink to="/#highlights" className="link_nav">Highlights</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="my-skills"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav">Skills</ScrollLink>
                    ) : (
                        <NavLink to="/#my-skills" className="link_nav">Skills</NavLink>
                    )}
                </li>

                <div className="dropdown">
                    <div className="drpbtn"><span className="dprlabel">Portfolio</span>
                        <FontAwesomeIcon icon={faChevronDown} className="drpicon"/>
                    </div>
                    <div className="dropdown-content">
                        <NavLink to="/UXDesign/List">UX Design</NavLink>
                        <NavLink to="/WebDevelopment/List">Web Development</NavLink>
                    </div>
                </div>
            </ul>
        </nav>
    )
}