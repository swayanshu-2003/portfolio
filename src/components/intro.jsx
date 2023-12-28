import React, { useState, useEffect, useRef } from "react";
import '../style/intro.css';
import DecoderTextAnimation from '../components/decoder';
import DecodeAnimation from "react-decode-animation";
import img from '../img/my.gif';

function Intro() {
    const texts = ["Web developer", "FrontEnd Developer", "React Enthusiast", "Student"];
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState(texts[textIndex]);
    const decodeRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setText(texts[textIndex]);
            decodeRef.current = Math.random().toString();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [textIndex, texts]);

    return (
        <div className='intro'>
            <div className="left">
                <p className="hello">Hello,</p>
                <h1 className="main">
                    I'm &nbsp;
                    <span className="name">
                        <DecoderTextAnimation text="Swayanshu()" duration={3} />
                    </span>
                    <span className="curser">&nbsp;|</span>
                </h1>
                <div className="designation">
                    <span className="designation">
                        <DecodeAnimation
                            key={decodeRef.current}
                            text={text}
                            autoplay
                        />
                    </span>&nbsp;!
                </div>
                <p className="tagline">Turning Ideas into Interactive Experiences</p>
            </div>
            <div className="right">
                {/* <img src={img} alt="My pho" className="pic" /> */}
                <iframe src="https://giphy.com/embed/jdPMeyv9rn0hZHh8n9" width="350" height="350" frameBorder="0" className="giphy-embed pic" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Intro;
