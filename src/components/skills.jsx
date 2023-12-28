import React from "react";
import  ui  from "../img/ui.png";
import '../style/skills.css';


function Skills(){
    return(
        <section className="about">
            <span className="skillsTitle">What I do ?</span>
            <span className="skillsDesc">Hello there! 👋 I'm Swayanshu, a passionate and creative web developer dedicated to crafting seamless and engaging digital experiences. With a keen eye for detail and a love for problem-solving, I bring ideas to life through the power of code.</span>
            <div className="skillbars">
                <img src={ui} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">UI/UX Design</p>
                    <p className="barBody">Lorem ipsum dolor adipisicing elit. Ab officiis corporis doloribus!</p>
                </div>
            </div>
            <div className="skillbars">
                <img src={ui} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">Web Development</p>
                    <p className="barBody">Lorem ipsum dolor adipisicing elit. Ab officiis corporis doloribus!</p>
                </div>
            </div>
            <div className="skillbars">
                <img src={ui} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">FrontEnd Development</p>
                    <p className="barBody">Lorem ipsum dolor adipisicing elit. Ab officiis corporis doloribus!</p>
                </div>
            </div>
            <div className="skillbars">
                <img src={ui} alt="ui/ux" className="barimg" />
                <div className="barText">
                    <p className="barHead">React.js</p>
                    <p className="barBody">Lorem ipsum dolor adipisicing elit. Ab officiis corporis doloribus!</p>
                </div>
            </div>
        </section>
    );
}
export default Skills;