import React, { useRef, useEffect, useState } from "react";
import ProjectsTemplate from "../UI/ProjectsTemplate";
import styles from "./Projects.module.scss";
import { projectdata } from "./Projectdata";

const Projects = React.forwardRef((props, ref) => {
  const [picture, setPicture] = useState(null);

  const itemRef = useRef([]);
  useEffect(() => {
    itemRef.current = itemRef.current.slice(0, projectdata.length);
  }, []);

  const imgClicked = (i) => {
    itemRef.current[i.target.id].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const imgMouseLeave = () => {
    setPicture(null);
  };
  const imgMouseEnter = (i) => {
    // setPicture(i.target.id);
    setPicture(i.target.id);
  };
  return (
    <>
      <div className={styles.projectPage} ref={ref}>
        {picture !== null && (
          <img
            className={styles.imageBackground}
            src={projectdata[picture].img}
            alt={projectdata[picture].Title}
          />
        )}
        <h1
          data-aos='fade-in'
          data-aos-duration='500'
          data-aos-delay={`${(projectdata.length + 2) * 100}`}
        >
          <span>Pro</span>jects
        </h1>

        <div className={styles.projectsCarousel}>
          {projectdata.map((data, i) => (
            <div
              className={styles.carouselItems}
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-delay={`${i * 50}`}
              key={i}
            >
              <div className={styles.imageDiv}>
                <img
                  src={data.img}
                  alt={data.Title}
                  id={i}
                  onClick={imgClicked}
                  onMouseEnter={imgMouseEnter}
                  onMouseLeave={imgMouseLeave}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.setTitle}>
          {picture !== null && <h2>{projectdata[picture].Title}</h2>}
        </div>
      </div>
      <div className={styles.projects}>
        {projectdata.map((data, i) => (
          <ProjectsTemplate
            ref={(el) => {
              itemRef.current[i] = el;
            }}
            key={data.Title}
            Title={data.Title}
            description={data.description}
            src={data.img}
            repoLink={data.repoLink}
            projectLink={data.projectLink}
            color={data.color}
            pAnimation={data.pAnimation}
            centered={data.centered}
          />
        ))}
      </div>
    </>
  );
});

export default Projects;
