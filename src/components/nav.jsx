import React from 'react';
import '../style/nav.css';
import img from '../img/swayanshu-logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="navbar">
            <img src={img} alt="logo" className="logo" />
            <ul className="navlinks container">
                <li className='links'><a className='hover-link' href="/">Home</a></li>
                <li className='links'><a className='hover-link' href="">About</a></li>
                <li className='links'><Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                <li className='links'><a className='hover-link' href="">Projects</a></li>
                <li className='links'><a className='hover-link' href="https://drive.google.com/file/d/1-xGm6fo9AR-833wwswigb4rAk3m3Umq6/view?usp=sharing" target='_blank'>Resume</a></li>
            </ul>
            <button>
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
                <span>Contact Me</span>
            </button>
        </div>
    );
}

export default Navbar;