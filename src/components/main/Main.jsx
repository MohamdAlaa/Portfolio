import { useState } from "react";
import { myProjects } from "./myProiects";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const findCategory = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return findCategory === buttonCategory;
    });

    setArr(newArr);
  };
  return (
    <main id="main" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("reactjs");
          }}
          className={currentActive === "reactjs" ? "active" : null}
        >
          React JS
        </button>
        <button
          onClick={() => {
            handleClick("nextjs");
          }}
          className={currentActive === "nextjs" ? "active" : null}
        >
          Next JS
        </button>
        <button
          onClick={() => {
            handleClick("typescript");
          }}
          className={currentActive === "typescript" ? "active" : null}
        >
          Typescript
        </button>
      </section>
      <section className="right-section flex ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.id}
                className="card "
              >
                <img
                  width={266}
                  height={147}
                  style={{ objectFit: "cover" }}
                  src={item.imgPath}
                  alt=""
                />
                <div style={{ width: "266px" }} className="box ">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.description}</p>
                  <p className="tec">Technologies : {item.key_techs}</p>
                  <div className="flex icons">
                    <a href={item.live} className="icon-link"></a>
                    <a href={item.github_url} className="icon-github"></a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
