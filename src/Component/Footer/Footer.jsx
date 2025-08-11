import React from "react";
import footerImg from "../../assets/footer-img.png";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-orange-500 text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img className="w-12 h-12" src={footerImg} alt="" />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          to={"https://www.linkedin.com/in/mirulmoktadirkhan/"}
          target="_blank"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link to={"https://github.com/moktadir-mirul"} target="_blank">
          <FaGithubSquare className="text-2xl" />
        </Link>
        <Link to={"https://www.facebook.com/mirulkhan/"} target="_blank">
          <FaFacebookSquare className="text-2xl" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
