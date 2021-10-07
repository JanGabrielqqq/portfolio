import React from "react";
import styles from "./Skills.module.scss";
import { SkillData } from "./SkillData";

const Skills = () => {
  return (
    <>
      <div className={styles.SkillsContainer}>
        <h3
          className={styles.SkillHeading}
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='500'
        >
          Skills
        </h3>
        <div className={styles.Skills}>
          {SkillData.map((data, i) => (
            <div
              className={styles.SkillContent}
              data-aos='fade-up'
              data-aos-delay={`${(i + 1) * 100}`}
              data-aos-duration='500'
              key={i}
            >
              <img src={data.img} alt={data.skill} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
