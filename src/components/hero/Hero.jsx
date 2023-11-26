import Lottie from "lottie-react";
import { motion } from "framer-motion";

import devAnimation from "../../animation/dev.json";
import "./hero.css";
const Hero = () => {
  return (
    <section id="hero" className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 10, type: "spring", stiffness: 100 }}
            src="./me1.png"
            alt=""
            className="avatar"
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="title"
        >
          Front-End Developer , Software Developer.
        </motion.h1>
        <p className="sub-title">
          I’m Mohamed Alaa , a Front-End Developer and Software Developer and
          {/* I’m Talented and Creative Front-End Developer */} skilled at
          designing sites and writing clean code. Work Experience Matched
          content to customer specifications through skilled design, writing and
          editing . Created innovative designs with use of programming languages
          , Framework , tools Developed and deployed successfully
        </p>
        <div className="all-icons flex">
          <a
            href="https://twitter.com/MohamedAlaa2411"
            className="icon icon-twitter"
          ></a>
          <a
            href="https://github.com/MohamdAlaa"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mohamed-alaa-elmenyawe/"
            className="icon icon-linkedin-square"
          ></a>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
