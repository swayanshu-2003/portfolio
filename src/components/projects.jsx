import React, { useEffect } from "react";
import '../style/projects.css';
import img from '../img/projectdemo.png';
import socialmedia from '../img/socialmedia.jpeg';
import sms from '../img/sms.png';
import eres from '../img/eres.png';
import portfolio from '../img/portfolio.png';
import gym from '../img/gym.png';
import food from '../img/food.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './card.jsx';

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const cardsData = [
        
        {
            title: 'Social Media Clone',
            imgUrl: socialmedia,
            language: 'HTML, CSS, JS, BOOTSTRAP',
        },
        {
            title: 'Portfolio Website',
            imgUrl: portfolio,
            language: 'React.js',
        },
        {
            title: 'Student Management website',
            imgUrl: sms,
            language: 'HTML, CSS, JS, BOOTSTRAP, PHP',
        },
        {
            title: 'E Resource website',
            imgUrl: eres,
            language: 'HTML, CSS, JS, BOOTSTRAP, PHP, Jquery',
        },
        {
            title: 'Food Website',
            imgUrl: food,
            language: 'HTML, CSS, JS, BOOTSTRAP',
        },
        {
            title: 'Gym Website',
            imgUrl: gym,
            language: 'HTML, CSS, JS, BOOTSTRAP',
        },
    ];
    return (
        <div className="projects">
            <p className="projectTitle" data-aos="zoom-in">My Projects</p>
            <div className="all" data-aos="zoom-in">
                {cardsData.map((card, index) => (
                    <Card
                        number={index}
                        title={card.title}
                        imgUrl={card.imgUrl}
                        language={card.language}
                    />
                ))}

            </div>
        </div>
    );
}
export default Projects;