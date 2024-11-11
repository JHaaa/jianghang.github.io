import React from 'react';
import styles from './ResearchPage.module.css';

const ResearchPage = () => {
  return (
    <div className={styles.container}>
      <h1>Research</h1>

      <h3 className={styles.header}>Working Papers</h3>
      <ul className={styles.customList}>
        <li>
          Jiang, Hang, Jin, Chen, &amp; Yang, Luyi. (2024). 
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
          Jiang, Hang. (2024). 
          <a className={styles.link} href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4853229" target="_blank" rel="noopener noreferrer"> A Dynamic Model for Token-gated Clubs.
          </a>
        </li>
      </ul>

      <h3 className={styles.header}>Conference Talks</h3>
      <ul className={styles.customList}>
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
    </div>
  );
};

export default ResearchPage;
