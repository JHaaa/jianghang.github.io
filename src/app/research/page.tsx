import React from 'react';
import styles from './ResearchPage.module.css';

const ResearchPage = () => {
  return (
    <div className={styles.container}>
      <h1>Research</h1>

      <h3 className={styles.header}>Working Papers</h3>
      <ul className={styles.customList}>
      <li>
          <strong>Hang Jiang</strong>, Chen Jin, Luyi Yang. (2025). 
          <a className={styles.link}  target="_blank" rel="noopener noreferrer"> Optimal Pricing, Return Policy, and Contract Design in Live Commerce. 
          </a> (working in progress)
        </li>
        <li>
          <strong>Hang Jiang</strong>, Chen Jin, Luyi Yang. (2024). 
          <a className={styles.link} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4715135" target="_blank" rel="noopener noreferrer"> Revisiting the First-Order Approach to Principal-Agent Problems.
          </a>
          <br /> &nbsp;&nbsp;&nbsp;&mdash; Accepted into the 25th ACM Conference on Economics and  
          Computation <a className={styles.link} href="https://ec24.sigecom.org/program/accepted-papers/index.html" target="_blank" rel="noopener noreferrer">(EC&apos;24)</a>
          <br /> &nbsp;&nbsp;&nbsp;&mdash; Accepted into the 7th World Congress of the Game Theory 
          Society <a className={styles.link} href="https://indico.pku.edu.cn/event/21/page/77-list-of-participants" target="_blank" rel="noopener noreferrer">(GAMES 2024)</a>
          <br /> &nbsp;&nbsp;&nbsp;&mdash; Accepted into the Conference on Information System and Technology 
          Technology <a className={styles.link} href="https://sites.google.com/view/cist2024/program" target="_blank" rel="noopener noreferrer">(CIST 2024)</a>
        </li>
        <br />
        <li>
        <strong>Hang Jiang</strong>. (2022). 
          <a className={styles.link} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4853229" target="_blank" rel="noopener noreferrer"> A Dynamic Model for Token-gated Clubs. 
          </a>
        </li>
      </ul>

      <h3 className={styles.header}>Conference Talks</h3>
      <ul className={styles.customList}>
        <li>
        Selected for presentation at the INFORMS Job Market Showcase Track (Will Present in October 2025, Atlanta)
        </li>
        <li>
          <a className={styles.link} href="https://ec24.sigecom.org/program/accepted-papers/index.html" target="_blank" rel="noopener noreferrer">
            The 25th ACM Conference on Economics and Computation
          </a> (July 9, 2024, Yale University, New Haven)
          
        </li>
        <li>
          <a className={styles.link} href="https://indico.pku.edu.cn/event/21/page/77-list-of-participants" target="_blank" rel="noopener noreferrer">
            The 7th World Congress of the Game Theory Society
          </a> (August 22, 2024, Peking University, Beijing)
          
        </li>
      </ul>

      <h3 className={styles.header}>Awards</h3>
      <ul className={styles.customList}>
        <li>
          <a className={styles.link} href="https://credentials.nus.edu.sg/14ac0f01-5f69-4f80-9c2b-95c3e9678b91#acc.qJiAIzOo" target="_blank" rel="noopener noreferrer">
          Research Achievement Award
          </a> , School of Computing, NUS, 2024
          
        </li>
        <li>
        Student Travel Grant, ACM EC Conference 2024
        </li>
        <li>
        Research Incentive Award, School of Computing, NUS, 2023-2025
        </li>
      </ul>
    </div>
  );
};

export default ResearchPage;
