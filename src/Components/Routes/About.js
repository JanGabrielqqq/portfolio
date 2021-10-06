import React from "react";
import Table from "../UI/Table";
import styles from "./About.module.scss";

const About = React.forwardRef((props, ref) => {
  return (
    <div className={styles.about} ref={ref}>
      <h1 data-aos='fade-down' data-aos-delay='100' data-aos-duration='500'>
        <span>Ab</span>out <span>M</span>e
      </h1>
      <div className={styles.aboutContent}>
        <Table />
        <div className={styles.Education}>
          <h3
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='500'
          >
            Education:
          </h3>
          <p data-aos='fade-right' data-aos-delay='300' data-aos-duration='500'>
            studied B.S. Chemical Engineering at Mapua University (no Degree)
          </p>
          <br />
          <h3
            data-aos='fade-right'
            data-aos-delay='400'
            data-aos-duration='500'
          >
            Certification:
          </h3>
          <p data-aos='fade-right' data-aos-delay='500' data-aos-duration='500'>
            React-The Complete Guide
          </p>
          <p data-aos='fade-right' data-aos-delay='600' data-aos-duration='500'>
            by Maximillian Schwarzmüller
          </p>
          <br />
          <p data-aos='fade-right' data-aos-delay='700' data-aos-duration='500'>
            The Complete 2021 Web Development Bootcamp
          </p>
          <p data-aos='fade-right' data-aos-delay='800' data-aos-duration='500'>
            by Dr. Angela Yu
          </p>
        </div>
      </div>
      <h4
        data-aos='fade-right'
        data-aos-delay='900'
        data-aos-duration='500'
        data-aos-offset='0'
      >
        <span> Email: JanGabrielqqq@gmail.com</span> |
        <span> Contact No. +63 919 835 0870</span>
      </h4>
    </div>
  );
});

export default About;
// className={styles.about}
