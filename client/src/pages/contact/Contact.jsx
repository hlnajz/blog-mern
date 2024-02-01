import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <span className="contactTitle">Contact Us</span>
      <div className="contactForm">
        <i class="contactIcon fa-brands fa-square-facebook"></i>
        <i class="contactIcon fa-brands fa-square-instagram"></i>
        <i class="contactIcon fa-brands fa-square-twitter"></i>
        <i class="contactIcon fa-brands fa-square-pinterest"></i>
      </div>
    </div>
  );
};

export default Contact;
