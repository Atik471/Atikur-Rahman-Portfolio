import PropTypes from "prop-types";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealWrapper = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal(".pop-up", {
      distance: "50px",
      origin: "bottom",
      opacity: 0,
      duration: 1500,
      delay: 200,
      reset: true,
      easing: "ease-out",
    });

    ScrollReveal().reveal(".fade-in", {
      opacity: 0,
      duration: 1000,
      delay: 300,
      reset: true,
      easing: "ease-out",
    });

    ScrollReveal().reveal(".slide-in-left", {
      distance: "100px",
      origin: "left",
      opacity: 0,
      duration: 800,
      delay: 200,
      reset: true,
      easing: "ease-out",
    });

    ScrollReveal().reveal(".slide-in-right", {
      distance: "100px",
      origin: "right",
      opacity: 0,
      duration: 800,
      delay: 200,
      reset: true,
      easing: "ease-out",
    });
  }, []);

  return <div>{children}</div>;
};

ScrollRevealWrapper.propTypes = {
  children: PropTypes.object,
};

export default ScrollRevealWrapper;
