import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="1">
        <div>
          <h5>About</h5>
        </div>
        <div>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="2"></div>
    </div>
  );
};
