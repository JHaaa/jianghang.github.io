import React from 'react';
import styles from './HonorsPage.module.css';

const HonorsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Honors &amp; Awards</h1>

      <ul className={styles.list}>
        <li>Research Excellence Postdoctoral Fellowship, University of Toronto, 2026 (declined)</li>
        <li>
          <a
            className={styles.link}
            href="/ORS_Best_Student_Paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORSS Best Student Paper Award
          </a>
          , Singapore 2025
        </li>
        <li>
          <a
            className={styles.link}
            href="https://iora.nus.edu.sg/afx2025/ngss-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finalist, Next-Gen Scholar&apos;s Symposium
          </a>
          , Singapore 2025
        </li>
        <li>
          <a
            className={styles.link}
            href="https://credentials.nus.edu.sg/14ac0f01-5f69-4f80-9c2b-95c3e9678b91#acc.qJiAIzOo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research Achievement Award
          </a>
          , School of Computing, NUS, 2024
        </li>
        <li>Student Travel Grant, ACM EC Conference 2024</li>
        <li>Research Incentive Award, School of Computing, NUS, 2023–2025</li>
        <li>NUS Research Scholarship, NUS 2021–2025</li>
        <li>Graduate Scholarship, SUSTech, 2017–2019</li>
        <li>Outstanding Undergraduate Scholarship, USTC, 2012</li>
      </ul>
    </div>
  );
};

export default HonorsPage;
