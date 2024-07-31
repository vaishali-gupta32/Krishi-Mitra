import { Link } from "react-router-dom";
{/*import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
*/}

const Footer = () => {
  return (
    <footer className="bg-[#5C8D15] ">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <img src="\kmlogo.png" alt="Brand Logo" className="h-30 lg:h-10 ml-1 lg:ml-0 mb-4" />

            <div className="flex flex-wrap py-2 ">
      <a
        href="#"
        target="_blank"
        className="transition-colors bg-transparent block text-center text-[white] py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md"
        rel="noreferrer"
      >
       {/* <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faFacebook} size="2x" /> */}
      </a>
      <a
        href="#"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-white py-2 px-2 text-base  hover:text-pink-600 ease-linear hover:ease-in"
        rel="noreferrer"
      >
        {/*<FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faInstagram} size="2x" />*/}
      </a>
      <a
        href="#"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-white py-2 px-2 text-base  hover:text-blue-700 ease-linear hover:ease-in"
        rel="noreferrer"
      >
      {/*  <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faLinkedin} size="2x" /> */}
      </a>
      <a
        href="#"
        target="_blank"
        className="transition-colors  bg-transparent block text-center text-white py-2 px-2 text-base  hover:text-red-600 ease-linear hover:ease-in rounded-b-md"
        rel="noreferrer"
      >
       {/* <FontAwesomeIcon className="w-7 h-7 md:w-8 md:h-8" icon={faYoutube} size="2x" /> */}
      </a>
      </div>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Support</h3>
            <ul className="text-black">
              <li><Link to="#" className="hover:text-black">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-black">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-black">FAQ</Link></li>
              <li><Link to="/returns" className="hover:text-black">Feedback</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Useful Links</h3>
            <ul className="text-black">
              <li><Link to="/privacy-policy" className="hover:text-black">Shop</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-black">Crop Swap</Link></li>
              <li><Link to="/disclaimer" className="hover:text-black">Know Your Soil</Link></li>
              <li><Link to="/disclaimer" className="hover:text-black">Agri Tours</Link></li>
              <li><Link to="/disclaimer" className="hover:text-black">Farm Story</Link></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Krishi Mitra</h3>
            <p className="text-left text-black text-lg leading-relaxed">
                        Krishi-Mitra is a revolutionary agriculture platform where you can find all solutions at one place and enhance your farming. 
                    </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-black font-semibold">©2024 Krishi Mitra. All rights reserved.</p>
        <p className="text-black mt-2 md:mt-0 font-semibold">Made by Brain Bandits</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;