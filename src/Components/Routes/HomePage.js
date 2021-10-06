import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Store/Context/Context";
import styles from "./HomePage.module.scss";

const circleArray = [];
for (var i = 0; i < 45; i++) {
  circleArray.push({
    diameter: Math.floor(Math.random() * 60 + 10),
    // color: `rgb(${Math.random() * 115 + 140},${Math.random() * 115 + 140},${
    //   Math.random() * 115 + 140
    // })`,
    opacity: Math.random() * 0.9 + 0.4,
    top: (Math.random() * 570 + 285) / 2,
    left: Math.random() * 1300,
    box: Math.random() * 2 + 3,
    mouseY: Math.random() * 200,
    negativity: Math.random() * 3 - 2,
    delay: i * 100,
  });
}

const HomePage = React.forwardRef((props, ref) => {
  const ctx = useContext(Context);

  useEffect(() => {
    setTimeout(ctx.afterAnimationHandler, 2000);
    setTimeout(ctx.afterAnimationHomePageHandler, 8000);
  }, [ctx.afterAnimationHandler, ctx.afterAnimationHomePageHandler]);

  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const mouseMovementHandler = (e) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
  };

  return (
    <div
      className={styles.HomePageContainer}
      // style={{ height: `${window.innerHeight * 0.9}px` }}
      onMouseMove={mouseMovementHandler}
      ref={ref}
    >
      {ctx.afterAnimation && (
        <div className={styles.Text}>
          <h1
            style={{
              textShadow: `0 0 ${mouseY / 20}px  black`,
              top: `${mouseY / 100}px`,
              left: `${mouseX / 300 + 80}px`,
            }}
          >
            Jan Gabriel Que
          </h1>
          <h3
            style={{
              textShadow: `0 0 ${mouseY / 100}px  black`,
              top: `${mouseY / 100 + 25}px`,
              left: `${mouseX / 300 + 145}px`,
            }}
          >
            Frontend Developer
          </h3>
        </div>
      )}

      {circleArray.map((data, index) => (
        <div
          className={styles.circle}
          key={index}
          style={{
            animationDelay: `${data.delay}ms`,
            height: `${data.diameter + (mouseY * data.opacity) / 3}px`,
            width: `${data.diameter + (mouseY * data.opacity) / 3}px`,
            backgroundColor: `black`,
            // opacity: data.opacity,
            opacity: `${!ctx.afterAnimationHomePage ? 0 : data.opacity}`,
            top: data.top + (mouseY / 800) * data.mouseY * data.negativity,
            left: data.left + (mouseX / 200) * data.negativity,
            boxShadow: `0 0 ${data.box + (mouseX / 325) * data.negativity}px ${
              data.box + (mouseX / 325) * data.negativity
            }px ${data.color}`,
          }}
        />
      ))}
    </div>
  );
});

export default HomePage;
