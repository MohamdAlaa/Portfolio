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
            src="./images/me1.webp"
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
          I’m Mohamed Alaa A Results-driven Front End Developer skilled in
          designing and implementing responsive and user-friendly web
          interfaces. Proficient in HTML, CSS, JavaScript (ES6), and TypeScript,
          with extensive experience using frameworks and libraries such as
          React.js, Redux, and Next.js. Adept at collaborating with cross
          functional teams to deliver high-quality web applications. Strong
          problem-solving skills and a keen eye for detail, committed to staying
          updated with the latest industry trends and technologies.
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
