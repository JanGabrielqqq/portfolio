import React, { useState } from "react";

export const Context = React.createContext({
  setHomePageHeight: () => {},
  afterAnimationHandler: () => {},
  afterAnimationHomePageHandler: () => {},
  afterAnimationHomePage: false,
  afterAnimation: false,
  homeHeight: 0,
});

export const ContextProvider = (props) => {
  const [homeHeight, setHomeHeight] = useState(0);
  const [afterAnimation, setAfterAnimation] = useState(false);
  const [afterAnimationHomePage, setAfterAnimationHomePage] = useState(false);
  const setHomePageHeight = (data) => {
    setHomeHeight(data);
    console.log(data);
  };
  const afterAnimationHandler = () => {
    setAfterAnimation(true);
  };
  const afterAnimationHomePageHandler = () => {
    setAfterAnimationHomePage(true);
  };
  const context = {
    setHomePageHeight,
    afterAnimationHandler,
    afterAnimationHomePageHandler,
    afterAnimationHomePage,
    afterAnimation,
    homeHeight,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
