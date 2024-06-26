import React, { useEffect } from "react";
import '../style/projects.css';
import img from '../img/projectdemo.png';
import socialmedia from '../img/socialmedia.jpeg';
import sms from '../img/sms.png';
import eres from '../img/eres.png';
import portfolio from '../img/portfolio.png';
import gym from '../img/gym.png';
import food from '../img/food.png';
import newsman from '../img/newsman.png';
import yt_clone from '../img/yt_clone.png';
import musix from '../img/musix.png';
import chatApp from '../img/chatApp.png';
import crypto from '../img/crypto.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './card.jsx';

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const cardsData = [

        {
            title: 'CryptoCurrency app with Updated Data',
            imgUrl: crypto,
            language: 'React.js, Chakra UI, coinGekko API , Chart.js',
            link: 'https://swayanshu-crypto-site.netlify.app/',
        },
        {
            title: 'Chat App with Google Log In',
            imgUrl: chatApp,
            language: 'React.js, Chakra UI, Firebase',
            link: 'https://chat-app-swayanshu.netlify.app/',
        },
        {
            title: 'Fully Functional Music Player Clone',
            imgUrl: musix,
            language: 'React.js, Bootstrap, Rapid API',
            link: 'https://github.com/swayanshu-2003/spotify-clone',
        },
        {
            title: 'Fully Functional Youtube Clone',
            imgUrl: yt_clone,
            language: 'React.js, TailwindCSS, Rapid API',
            link: 'https://github.com/swayanshu-2003/youtube_clone',
        },
        {
            title: 'Social Media Clone',
            imgUrl: socialmedia,
            language: 'HTML, CSS, JS, BOOTSTRAP',
            link: 'https://github.com/swayanshu-2003/socialmedia-clone-UI',
        },
        {
            title: 'Daily News Website',
            imgUrl: newsman,
            language: 'React.js, Bootstrap, News API',
            link: 'https://github.com/swayanshu-2003/newsMan',
        },
        {
            title: 'Portfolio Website',
            imgUrl: portfolio,
            language: 'React.js',
            link: 'https://github.com/swayanshu-2003/portfolio',
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
        <div className="projects" id="projects">
            <p className="projectTitle" data-aos="zoom-in">My Projects</p>
            <div className="all" data-aos="zoom-in">
                {cardsData.map((card, index) => (
                    <Card
                        number={index + 1}
                        title={card.title}
                        imgUrl={card.imgUrl}
                        language={card.language}
                        link={card.link}
                    />
                ))}

            </div>
        </div>
    );
}
export default Projects;