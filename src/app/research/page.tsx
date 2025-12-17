import React from 'react';
import styles from './ResearchPage.module.css';

const ResearchPage = () => {
  return (
    <div className={styles.container}>
      <h1>Research</h1>

      <h3 className={styles.header}>Working Papers</h3>
      <ul className={styles.customList}>

      <li>
  <strong>Hang Jiang</strong>, Jussi Keppo, Kimon Drakopoulos
  <span style={{ marginLeft: '6px' }}>(2025)</span>
  <em style={{ marginLeft: '6px' }}>Data Competition under the AI Flywheel Effect.</em>
  <span className={styles.underReview} style={{ marginLeft: '6px' }}>Manuscript in Preparation</span>
      </li>

      <li>
  <strong>Hang Jiang</strong>, Jussi Keppo
  <span style={{ marginLeft: '6px' }}>(2025)</span>
  <em style={{ marginLeft: '6px' }}>The Human Roadblock to AI.</em>
  <span className={styles.underReview} style={{ marginLeft: '6px' }}>Under Review</span>
    </li>


        <li>
          <strong>Hang Jiang</strong>
          <span style={{ marginLeft: '6px' }}>(2025).</span>
          <a
            href="https://arxiv.org/abs/2509.14766"
            className={styles.paperLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            An Implementation Relaxation Approach to Principal-Agent Problems.
          </a>
          <span className={styles.underReview}>Under Review</span>
        </li>

        <li>
  <strong>Hang Jiang</strong>, Luyi Yang, Chen Jin
  <span style={{ marginLeft: '6px' }}>(2025)</span>
  <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5923462"
            className={styles.paperLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Managing Sales Agents and Product Returns While Guarding Against Fake Orders.
          </a>
  <span className={styles.underReview} style={{ marginLeft: '6px' }}>
    Under Review
  </span>
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
  <span className={styles.underReview}>
    <em>Management Science</em> Major Revision
  </span>

  {/* 📍 子项部分用 <ul><li> 替换，自动生成圆点 */}
  <ul style={{ marginTop: '0.5rem', marginLeft: '1rem', lineHeight: '1', color: '#000', listStyleType: 'disc' }}>
    <li>
      <strong>ORSS Best Student Paper Award</strong>{' '}
      <a
        href="/ORS_Best_Student_Paper.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline', marginLeft: '6px' }}
      >
        [certificate]
      </a>
    </li>

    <li>
      Accepted into the 25th ACM Conference on Economics and Computation (EC&apos;24){' '}
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
      Accepted into the 7th World Congress of the Game Theory Society (GAMES 2024)
    </li>

    <li>
      Accepted into the Conference on Information System and Technology (CIST 2024)
    </li>
  </ul>
</li>

      </ul>

      <h3 className={styles.header}>Conference Talks</h3>
      <ul className={styles.customList}>
        <li>
          Selected for presentation at the INFORMS Job Market Showcase Track (October 26, 2025, Atlanta)
        </li>
        <li>Next-Gen Scholar Symposium, Analytics for X Conference 2025 (Sep 26, 2025, NUS, Singapore)</li>
        <li>2025 INFORMS International Conference (Jul 21, 2025, Singapore)</li>
        <li>
          The 7th World Congress of the Game Theory Society (August 22, 2024, PKU, Beijing)
        </li>
        <li>
          The 25th ACM Conference on Economics and Computation (July 9, 2024, Yale, New Haven){' '}
          <a
            href="https://www.youtube.com/watch?v=6VRMU8f5dT8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            [on YouTube]
          </a>
        </li>
      </ul>

      <h3 className={styles.header}>Awards</h3>
      <ul className={styles.customList}>
        <li>
        <a
            className={styles.link}
            href="/ORS_Best_Student_Paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORSS Best Student Paper Award
          </a>, Singapore 2025  </li>
        <li><a             className={styles.link}
            href="https://iora.nus.edu.sg/afx2025/ngss-2025/"
            target="_blank"
            rel="noopener noreferrer"
          > Finalist, Next-Gen Scholar&apos;s Symposium </a>{' '}, Singapore 2025</li>
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
        <li>Research Incentive Award, School of Computing, NUS, 2023–2025</li>
      </ul>
    </div>
  );
};

export default ResearchPage;
