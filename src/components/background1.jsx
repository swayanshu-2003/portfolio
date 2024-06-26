import React from "react";
import YourComponentBackground from '../img/effect-1.svg';
import '../style/background1.css';

const YourComponent = () => {
    return (
        <div className="your-component-container">
            <img src={YourComponentBackground} alt="Background" className="svg-background" />
        </div>
    );
};
export default YourComponent;
