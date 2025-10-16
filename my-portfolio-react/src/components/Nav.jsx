import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"
import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleLanguageChange = async (e) => {
        const selectedLang = e.target.value;
        /*console.log("Idioma seleccionado:", selectedLang);*/

        const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: "Hello, world!",
                targetLang: selectedLang,
            }),
        });
        
        const data = await response.json();
        console.log("Traducción:", data.translations[0].text);
    };

    return (
        <nav id="main-navigation" className={menuOpen ? "open" : ""}>
            {/* Hamburguer botton visible on mobile only */}
            <button className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars}/>
            </button>
            <ul className={menuOpen ? "nav-list active" : "nav-list"}>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="wrap-profile"
                          spy={true}
                          activeClass="visited"
                          offset={-100}
                          duration={500}
                          className="link_nav"
                          onClick={() => setMenuOpen(false)}>Home</ScrollLink>
                    ) : (
                        <NavLink 
                        to="/" 
                        className="link_nav" 
                        onClick={() => setMenuOpen(false)}>Home</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="about-me"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav"
                          onClick={() => setMenuOpen(false)}>About</ScrollLink>
                    ) : (
                        <NavLink 
                        to="/#about-me" 
                        className="link_nav"
                        onClick={() => setMenuOpen(false)}>About</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="highlights"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav"
                          onClick={() => setMenuOpen(false)}>Highlights</ScrollLink>
                    ) : (
                        <NavLink 
                        to="/#highlights" 
                        className="link_nav"
                        onClick={() => setMenuOpen(false)}>Highlights</NavLink>
                    )}
                </li>
                <li>
                    {isHome ? (
                        <ScrollLink 
                          to="my-skills"
                          spy={true}
                          activeClass="visited"
                          duration={500}
                          className="link_nav"
                          onClick={() => setMenuOpen(false)}>Skills</ScrollLink>
                    ) : (
                        <NavLink 
                        to="/#my-skills" 
                        className="link_nav"
                        onClick={() => setMenuOpen(false)}>Skills</NavLink>
                    )}
                </li>

                {/* dropdown with click for mobile */}
                <div 
                className={`dropdown ${dropdownOpen ? "active" : ""}`}
                onClick={(e) => {
                    // only to activate in mobile
                    if (window.innerWidth <= 900) {
                        e.preventDefault();
                        setDropdownOpen(!dropdownOpen);
                    }
                }}
                >
                    <div className="drpbtn">
                        <span className="dprlabel">Portfolio</span>
                        <FontAwesomeIcon icon={faChevronDown} className="drpicon"/>
                    </div>
                    <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
                        <NavLink 
                        to="/UXDesign/List"
                        onClick={() => setMenuOpen(false)}>UX Design</NavLink>
                        <NavLink
                        to="/WebDevelopment/List"
                        onClick={() => setMenuOpen(false)}>Web Development</NavLink>
                    </div>
                </div>
                <li>
                    <select 
                    name="changeLanguage" 
                    id="changeLanguage"
                    onChange={handleLanguageChange}>
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}