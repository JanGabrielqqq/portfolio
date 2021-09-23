import React from "react";
import styles from "./ProjectTemplate.module.scss";

const ProjectsTemplate = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.projectContainer}>
      <img
        data-aos='fade-in'
        data-aos-duration='500'
        src={props.src}
        alt={props.alt}
      />
      <h1
        data-aos='fade-down'
        data-aos-duration='1000'
        style={{ color: `${props.color}` }}
      >
        <span>{props.Title.slice(0, 3)}</span>
        {props.Title.slice(3, 6)}
        <span>{props.Title.slice(6, 8)}</span>
        {props.Title.slice(8, props.Title.length)}
      </h1>

      <p
        data-aos={props.pAnimation}
        data-aos-duration='1000'
        style={{ color: `${props.color}`, textAlign: `${props.centered}` }}
      >
        {props.description}
      </p>

      <div className={styles.alinks}>
        <a
          data-aos='fade-up'
          data-aos-duration='200'
          href={props.repoLink}
          target='_blank'
          rel='noreferrer'
        >
          View Source Code
        </a>
        <a
          data-aos='fade-up'
          data-aos-duration='200'
          href={props.projectLink}
          target='_blank'
          rel='noreferrer'
        >
          View Project
        </a>
      </div>
    </div>
  );
});

export default ProjectsTemplate;
