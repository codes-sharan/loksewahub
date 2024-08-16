import './Footer.css'; // Import a CSS file for styling the footer

const Footer = () => {
  return (
<footer className='Footer-all'>  

          <ul className='Footer-links'>
            <li><a href="/about"> ABOUT US </a></li>
            <li><a href="/privacy"> PRIVACY POLICY </a></li>
            <li><a href="/advertise"> ADVERTISE WITH US </a></li>
            <li><a href="/archives"> ARCHIVES </a></li>
            <li><a href="/contact"> CONTACT US </a></li>
            <li><a href="/epaper"> E-PAPER </a></li>
          </ul>
       
          <ul className='Footer-social'>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>

          <p className='Footer-text'>
          © 2024 loksewahub.com
          </p>

        
</footer>
  );
};

export default Footer;
