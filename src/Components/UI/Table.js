import React from "react";
import styles from "./Table.module.scss";
import { Tabledata } from "./Tabledata";

const Table = () => {
  return (
    <>
      <table className={styles.Table}>
        <thead>
          <tr
            data-aos='fade-right'
            data-aos-delay='100'
            data-aos-duration='500'
          >
            <th style={{ textAlign: "left" }}>
              <span>S</span>kill:
            </th>
            <th></th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {Tabledata.map((data, i) => (
            <tr
              key={i}
              data-aos='fade-right'
              data-aos-delay={`${(i + 1) * 100}`}
              data-aos-duration='500'
            >
              <td>
                <span>{data.skill.slice(0, 1)}</span>
                {data.skill.slice(1, data.skill.length)}
              </td>
              <td>
                <div className={styles.Bar}>
                  <div
                    className={styles.BarFill}
                    style={{ width: `${(200 * data.percent) / 100}px` }}
                  ></div>
                </div>
              </td>
              <td>{`${data.percent}%`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
