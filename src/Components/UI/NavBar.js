import React, { useContext } from "react";
import { Context } from "../../Store/Context/Context";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar(props) {
  const ctx = useContext(Context);
  const scrollToHome = () => {
    props.homeRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToProjects = () => {
    props.projectRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToAbout = () => {
    props.aboutRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (props.yOffset > window.innerHeight * 0.9) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, [props.yOffset]);
  const [isFixed, setIsFixed] = useState(false);

  return (
    <>
      <div
        className={styles.NavBar}
        // style={{ height: `${window.innerHeight * 0.1}px` }}
      >
        <div className={styles.NavBarElements}>
          <div></div>
          {ctx.afterAnimationHomePage && (
            <div className={styles.navBarAnimation}>
              <button onClick={scrollToHome}>Home</button>|
              <button onClick={scrollToProjects}>Projects</button>|
              <button onClick={scrollToAbout}>About</button>
            </div>
          )}
        </div>
      </div>
      {isFixed && (
        <div
          className={`${styles.NavBar} ${styles.fixed}`}
          // style={{ height: `${window.innerHeight * 0.1}px` }}
        >
          <div className={styles.NavBarElements}>
            <div></div>
            <div>
              <button onClick={scrollToHome}>Home</button>|
              <button onClick={scrollToProjects}>Projects</button>|
              <button onClick={scrollToAbout}>About</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
