import About from "./Components/Routes/About";
import HomePage from "./Components/Routes/HomePage";
import Projects from "./Components/Routes/Projects";
import NavBar from "./Components/UI/NavBar";
import "./App.scss";
import { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Context } from "./Store/Context/Context";

function App() {
  const ctx = useContext(Context);
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true });
  }, []);
  const bodyRef = useRef();
  const homeRef = useRef();
  const projectRef = useRef();
  const aboutRef = useRef();
  const [yOffset, setYOffset] = useState(0);
  const scrollHandler = () => {
    setYOffset(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // useEffect(() => {
  //   console.log(yOffset);
  //   console.log(projectdata.length);
  //   console.log(window.innerHeight * (projectdata.length - 1 / 2));
  // });

  return (
    <div className='app' ref={bodyRef}>
      <HomePage ref={homeRef} />
      <NavBar
        bodyRef={bodyRef}
        homeRef={homeRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        yOffset={yOffset}
      />

      {ctx.afterAnimationHomePage && <Projects ref={projectRef} />}

      {ctx.afterAnimationHomePage && <About ref={aboutRef} />}
    </div>
  );
}

export default App;
