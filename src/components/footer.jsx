import React from "react";
import '../style/footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} <a href="#">Swayanshu Panda</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
