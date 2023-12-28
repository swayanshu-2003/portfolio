import React, { useState, useEffect } from 'react';
import '../style/dta.css'; // Import the CSS file for styling

const DecoderTextAnimation = ({ text, duration = 2 }) => {
  const [decodedText, setDecodedText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDecodedText((prevText) => {
        if (prevText === text) {
          return '';
        } else {
          // Simulate decoding logic (you can customize this)
          const nextChar = text[prevText.length];
          return prevText + (nextChar ? nextChar : '');
        }
      });
    }, (duration * 1000) / text.length);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [text, duration]);

  return <div className="decoder-text">{decodedText}</div>;
};

export default DecoderTextAnimation;
