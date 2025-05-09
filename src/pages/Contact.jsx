import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaTwitch, FaEnvelope} from 'react-icons/fa';


function Contact() {
  return (
      <div className="contact">
      
        <h2>WHERE TO FIND ME</h2>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/beth-chesman-267791219/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/bethchesman" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="mailto:bethc@shaw.ca" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.twitch.tv/clutchmonger" target="_blank" rel="noopener noreferrer">
          <FaTwitch size={40} />
        </a>
      </div>
      
      </div>
   )
}
  export default Contact;