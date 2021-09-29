import calculator from "../../Images/calculator-img.png";
import countdown from "../../Images/countdown-img.png";
import talktokanye from "../../Images/talktokanye-img.png";
import FoodStore from "../../Images/FoodStore-img.png";
import Quotes from "../../Images/Quotes-img-3.png";
import portefolio from "../../Images/portfolio-img.png";
import mgs from "../../Images/mgs-img.png";
export const projectdata = [
  {
    Title: "MGS landing page",
    color: "white",
    img: mgs,
    pAnimation: "fade-left",
    description:
      "This is a redesign of one of my school's organization website landing page I have made using React.js with React-router, and some react frameworkfor the animations,and Sass. ",
    repoLink: "https://github.com/JanGabrielqqq/MapuaGamingSociety/tree/master",
    projectLink: "https://jangabrielqqq.github.io/MapuaGamingSociety/",
  },
  {
    Title: "Calculator",
    color: "black",
    img: calculator,
    pAnimation: "fade-right",
    description:
      "This is my first project using react. Its a calculator that has simple calculator features with history log that can be removed. Some react library was used like React-Transition-Group to handle transitions, and react-scrollable-feed to manage some scrolling concerns. All the state handled by the react context API",
    repoLink: "https://github.com/JanGabrielqqq/calculator/tree/master",
    projectLink: "https://jangabrielqqq.github.io/calculator/",
  },
  {
    Title: "Countdown | Stopwatch",
    img: countdown,
    pAnimation: "fade-left",
    description:
      "This is a challenge by Frontend Mentor where the project should look almost the same as the picture provided and work as mentioned. Aside from the given task, I added some more feature like modal for the user to input the time and switch from a countdown to a stopwatch timer and many more features like pause/play, reset, laps. All state handled by Redux using react-redux-toolkit ",
    repoLink: "https://github.com/JanGabrielqqq/countdown/tree/master",
    projectLink: "https://jangabrielqqq.github.io/countdown/",
  },
  {
    Title: "Talktokanye",
    color: "black",
    img: talktokanye,
    pAnimation: "fade-right",
    description:
      "This is a chatbot let you tell anything you want to say to Kanye West and with every message it will respond with a random kanye west tweets/quotes from the API Kanye.rest. It has time stamp feature when a message is clicked. HTTP request is handled using axios. All the state handled by the react context API. and maybe ill add some more features in the future",
    repoLink: "https://github.com/JanGabrielqqq/talktokanye/tree/master",
    projectLink: "https://jangabrielqqq.github.io/talktokanye/",
  },
  {
    Title: "Food Store Project",
    img: FoodStore,
    pAnimation: "fade-left",
    description:
      "This project is from Maximilian Schwarzmüller's React course. All CSS are already provided by Maximilian Schwarzmüller and all logic is to be done by us. All the state handled by the react context API and useReducer. The purpose of this project is to practice state management alternative to Redux and some react hooks, and to have a little experience with e-commerce",
    repoLink: "https://github.com/JanGabrielqqq/online-food-store/tree/master-",
    projectLink: "https://jangabrielqqq.github.io/online-food-store/",
  },
  {
    Title: "Great Quotes",
    color: "white",
    img: Quotes,
    pAnimation: "fade-right",
    description:
      "This project is powered by Firebase's Realtime database. This project is from Maximilian Schwarzmüller's React course. All CSS and react custom Hooks are already provided by Maximilian Schwarzmüller and all logic is to be done by us. The purpose of this project is to practice using React-Routes (Links, Switch, parrams ..etc) and http requests with fetch().",
    repoLink: "https://github.com/JanGabrielqqq/Quotes/tree/master",
    projectLink: "https://jangabrielqqq.github.io/Quotes/",
  },
  {
    Title: "Portfolio",
    img: portefolio,
    pAnimation: "fade-left",
    description:
      "This is my portfolio. This is the compilation of all my projects. It contains a navbar, css animations using react-aos, Parallax animations, and hover effects. It is also set for mobile view. I'll update this portfolio with work projects as soon as I have one.",
    repoLink: "https://github.com/JanGabrielqqq/portfolio/tree/master",
    projectLink: "https://jangabrielqqq.github.io/portfolio/",
  },
];
