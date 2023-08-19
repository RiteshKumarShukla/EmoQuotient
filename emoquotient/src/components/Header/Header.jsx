import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HeaderWrapper,
  LeftSection,
  RightSection,
  Options,
  MobileMenuButton,
} from "./HeaderStyles";
import { headerVariants } from "./HeaderVariants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper
      as={motion.header}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <LeftSection>
        <img
          src="https://clipart-library.com/new_gallery/4-43779_how-to-draw-tongue-out-emoji-transparent-purple.png"
          alt="EmoQuotient"
        />
        <Options isOpen={isMenuOpen}>
          <ul>
            <li>
              <a href="#"> Emotions </a>{" "}
            </li>{" "}
            <li>
              <a href="#"> Manifesto </a>{" "}
            </li>{" "}
            <li>
              <a href="#"> Self-Awareness</a>{" "}
            </li>{" "}
            <li>
              <a href="#"> Work With Us </a>{" "}
            </li>{" "}
          </ul>{" "}
        </Options>{" "}
      </LeftSection>{" "}
      <RightSection>
        <button> Download App </button>{" "}
      </RightSection>
      <MobileMenuButton onClick={toggleMenu}>
        {" "}
        {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
      </MobileMenuButton>{" "}
    </HeaderWrapper>
  );
};

export default Header;
