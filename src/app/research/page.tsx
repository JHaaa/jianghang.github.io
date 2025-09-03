import React from 'react';
import styles from './ResearchPage.module.css';

const ResearchPage = () => {
  return (
    <div className={styles.container}>
      <h1>Research</h1>

      <h3 className={styles.header}>Working Papers</h3>
      <ul className={styles.customList}>
        <li>
          <strong>Hang Jiang</strong>
          <span style={{ marginLeft: '6px' }}>(2025).</span>
          <a
            href="https://ssrn.com/abstract=5359948"
            className={styles.paperLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            An Implementation Relaxation Approach to Principal–Agent Problems.
          </a>
          <span className={styles.underReview}>In preparation for submission</span>
        </li>

        <li>
          <strong>Hang Jiang</strong>, Luyi Yang, Chen Jin
          <span style={{ marginLeft: '6px' }}>(2025).</span>
          <a
            href="#"
            className={styles.paperLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Managing Sales Agents and Product Returns While Guarding Against Fake Orders.
          </a>
          <span className={styles.underReview}>Under Review</span>
        </li>

        <li>
          <strong>Hang Jiang</strong>, Chen Jin, Luyi Yang
          <span style={{ marginLeft: '6px' }}>(2024).</span>
          <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4715135"
            className={styles.paperLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Revisiting the First-Order Approach to Principal-Agent Problems.
          </a> 
          <span className={styles.underReview}> <em>Management Science</em> Major Revision</span>
          <span className={styles.subItem}>
            — Accepted into the 25th ACM Conference on Economics and Computation (EC'24){' '}
            <a
              href="https://www.youtube.com/watch?v=6VRMU8f5dT8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              [on Youtube]
            </a>
          </span>
          <span className={styles.subItem}>
            — Accepted into the 7th World Congress of the Game Theory Society (GAMES 2024)
          </span>
          <span className={styles.subItem}>
            — Accepted into the Conference on Information System and Technology (CIST 2024)
          </span>
        </li>

      {/*
<li>
  <strong>Hang Jiang</strong>
  <span style={{ marginLeft: '6px' }}>(2022).</span>
  <a
    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4853229"
    className={styles.paperLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    A Dynamic Model for Token-gated Clubs.
  </a>
</li>
*/}

      </ul>

      <h3 className={styles.header}>Conference Talks</h3>
      <ul className={styles.customList}>
        <li>
          Selected for presentation at the INFORMS Job Market Showcase Track (Will Present in October 2025, Atlanta)
        </li>
        <li>
  The 25th ACM Conference on Economics and Computation (July 9, 2024, Yale University, New Haven){' '}
  <a
    href="https://www.youtube.com/watch?v=6VRMU8f5dT8"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    [on YouTube]
  </a>
</li>

<li>
  The 7th World Congress of the Game Theory Society (August 22, 2024, Peking University, Beijing)
</li>


       {/* <li>
           <a
            className={styles.link}
            href="https://ec24.sigecom.org/program/accepted-papers/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The 25th ACM Conference on Economics and Computation
          </a>{' '}
          (July 9, 2024, Yale University, New Haven)
        </li>
        <li>
          <a
            className={styles.link}
            href="https://indico.pku.edu.cn/event/21/page/77-list-of-participants"
            target="_blank"
            rel="noopener noreferrer"
          >
            The 7th World Congress of the Game Theory Society
          </a>{' '}
          (August 22, 2024, Peking University, Beijing)
        </li> */}

      </ul>

      <h3 className={styles.header}>Awards</h3>
      <ul className={styles.customList}>
        <li>Finalist, Next-Gen Scholar’s Symposium, NUS 2025</li>
        <li>
          <a
            className={styles.link}
            href="https://credentials.nus.edu.sg/14ac0f01-5f69-4f80-9c2b-95c3e9678b91#acc.qJiAIzOo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research Achievement Award
          </a>{' '}
          , School of Computing, NUS, 2024
        </li>
        <li>Student Travel Grant, ACM EC Conference 2024</li>
        <li>Research Incentive Award, School of Computing, NUS, 2023-2025</li>
      </ul>
    </div>
  );
};

export default ResearchPage;
