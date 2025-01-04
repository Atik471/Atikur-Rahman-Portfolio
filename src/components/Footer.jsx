import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#01081B] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Atik471/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/atikur-rahman-9680262b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/atikur.rahman.424121?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="mb-4">
          <p className="text-lg">
            <a
              href="mailto:atiksafinmd1@google.com"
              className="hover:underline text-gray-400"
            >
              Email: atiksafinmd1@google.com
            </a>
          </p>
          <p className="text-lg">
            <a
              href="tel:+8801920220166"
              className="hover:underline text-gray-400"
            >
              Phone: +880 1920 220166
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Atikur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;