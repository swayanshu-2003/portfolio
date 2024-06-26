import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '../style/nav.css';
import img from '../img/swayanshu-logo.png';

function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    const handleSetInactive = () => {
        setActiveLink(null);
    };

    return (
        <div className="navbar">
            <img src={img} alt="logo" className="logo" />
            <ul className="navlinks container">
                <li className={`links hover-link ${activeLink === 'home' ? 'active' : ''}`}>
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        offset={-77}
                    >
                        Home
                    </ScrollLink>
                </li>
                <li className={`links hover-link ${activeLink === 'about' ? 'active' : ''}`}>
                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        offset={-77}
                    >
                        About
                    </ScrollLink>
                </li>
                <li className={`links hover-link ${activeLink === 'projects' ? 'active' : ''}`}>
                    <ScrollLink
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        offset={-77}
                    >
                        Projects
                    </ScrollLink>
                </li>
                <li className={`links hover-link ${activeLink === 'contact' ? 'active' : ''}`}>
                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        onSetActive={handleSetActive}
                        onSetInactive={handleSetInactive}
                        offset={-77}
                    >
                        Contact
                    </ScrollLink>
                </li>
                <li className={`links hover-link`}>
                    <a href="https://drive.google.com/file/d/1UYke8ZZkNZ-NTRMWkiPqaFbFwEe3D5qe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>

            </ul>
            <a href="https://wa.me/8144595670" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

                <button >
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>WhatsApp</span>
                </button>
            </a>
        </div>
    );
}

export default Navbar;
