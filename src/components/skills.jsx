import React, { useEffect } from "react";
import ui from "../img/ui.png";
import frontend from "../img/frontend.png";
import webdev from "../img/webdev.png";
import react from "../img/react.png";
import '../style/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bg from './background1';


function Skills() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section className="about" data-aos="fade-up">
            <span className="skillsTitle" data-aos="fade-up">What I do ?</span>
            <span className="skillsDesc" data-aos="fade-up">Hello there! 👋 I'm Swayanshu, a passionate and creative web developer dedicated to crafting seamless and engaging digital experiences. With a keen eye for detail and a love for problem-solving, I bring ideas to life through the power of code. I specialize in HTML, CSS, JavaScript, React, etc. With a creative mindset and a problem-solving approach, I enjoy transforming ideas into functional and visually appealing websites.</span>

            <div className="skillbars" data-aos="fade-up">
                <img src={webdev} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">MySql, PostgreSQL, MongoDB</p>
                    <p className="barBody">"Navigating the Digital Landscape with Precision."!</p>
                </div>
            </div>
            <div className="skillbars" data-aos="fade-up">
                <img src={ui} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">Web Sockets</p>
                    <p className="barBody">"Innovating the Web, Empowering Your Ideas."!</p>
                </div>
            </div>
            <div className="skillbars" data-aos="fade-up">
                <img src={frontend} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">Next.js</p>
                    <p className="barBody">"Engineering Dreams, Coding Realities."!</p>
                </div>
            </div>
            <div className="skillbars" data-aos="fade-up">
                <img src={webdev} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">Express.JS</p>
                    <p className="barBody">"Navigating the Digital Landscape with Precision."!</p>
                </div>
            </div>
            <div className="skillbars" data-aos="fade-up">
                <img src={react} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">React.js</p>
                    <p className="barBody">"Beyond Boundaries, Beyond Code."!</p>
                </div>
            </div>
        </section>
    );
}
export default Skills;
