import React, {useEffect} from "react";
import '../style/contact.css';
import mypic from '../img/contactus.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, []);
    return (
        <div className="contact" id="contact" data-aos="fade-up">
            <div className="top">
                <p className="connect" data-aos="fade-in">LET'S CONNECT !</p>
                <p className="connect-desc" data-aos="fade-in">
                    Elevating Ideas, Crafting Experiences: Where Code Meets Creativity</p>
            </div>
            <div className="bottom">
                <div className="left-contact">
                <div className="contact-img" data-aos="fade-up">
                    <img src={mypic} alt="" />
                </div>
                    <div className="mailme">
                        <p className="mail-caption" data-aos="fade-up">write an e-mail</p>
                        <p className="gmail" data-aos="fade-up"><a href="mailto:swayanshu2003@gmail.com">swayanshu2003@gmail.com</a></p>
                    </div>
                    <div className="callme">
                        <p className="call-caption" data-aos="fade-up">call me at</p>
                        <p className="call" data-aos="fade-up">+91-8144595670</p>
                    </div>

                    <div className="social-media-buttons">
                        <a href="#" className="social-icon fb" data-aos="fade-up">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/swayanshu_in" target="_blank" className="social-icon tweet" data-aos="fade-up">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/swayanshupanda/" target="_blank" className="social-icon linkedin" data-aos="fade-up">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/swayanshu.in" target="_blank" className="social-icon insta" data-aos="fade-up">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>


                </div>
                <form action="mailto:swayanshu2003@gmail.com" className="contact-form" method="GET">
                    <div className="inpgrp inps">
                        <div className="coolinput a">
                            <label htmlFor="name" className="text" data-aos="fade-up">NAME</label>
                            <input type="text" name="name" className="input inpgrp1" placeholder="Name *" data-aos="fade-up" />
                        </div>
                        <div className="coolinput a">
                            <label htmlFor="email" className="text" data-aos="fade-up">EMAIL</label>
                            <input type="text" name="email" className="input inpgrp1" placeholder="Email *" data-aos="fade-up" />
                        </div>
                    </div>
                    <div className="coolinput inps">
                        <label htmlFor="subject" className="text" data-aos="fade-up">SUBJECT</label>
                        <input type="text" name="subject" className="input" placeholder="Subject *" data-aos="fade-up" />
                    </div>
                    <div className="coolinput inps">
                        <label htmlFor="message" className="text" data-aos="fade-up">MESSAGE</label>
                        <textarea rows="4" cols="50" name="message" className="input" placeholder="Message *" data-aos="fade-up" />
                    </div>
                    <button className="contact-btn" data-aos="fade-up">
                        <p>send message</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
