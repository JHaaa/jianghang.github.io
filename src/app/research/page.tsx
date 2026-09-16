import React from 'react'; 
import styles from './ResearchPage.module.css'; 
 
const ResearchPage = () => { 
  return ( 
    <div className={styles.container}> 
      <h1>Research</h1> 
 
      <h3 className={styles.header}>Publications</h3> 
      <ul className={styles.customList}> 
        <li>
  <strong>Hang Jiang</strong>, Chen Jin, Luyi Yang{' '}
  <a
    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4715135"
    className={styles.paperLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    Revisiting the First-Order Approach to Principal-Agent Problems.
  </a>{' '}
  <em>Management Science</em>, forthcoming.
 
          <ul 
            style={{ 
              marginTop: '0.5rem', 
              marginLeft: '1rem', 
              lineHeight: '1.6', 
              color: '#000', 
              listStyleType: 'disc', 
            }} 
          > 
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
  Extended Abstract in Proceedings of the 25th ACM Conference on Economics and Computation{' '}
  <a
    href="https://dl.acm.org/doi/10.1145/3670865.3673453"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    [ACM DL]
  </a>
</li>
            <li> 
              Presented at the 25th ACM Conference on Economics and Computation{' '} 
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
              Presented at the 7th World Congress of the Game Theory Society (GAMES 2024) 
            </li> 
          </ul> 
        </li> 
      </ul> 
 
<h3 className={styles.header}>Working Papers</h3> 
<ul className={styles.customList}> 
  <li> 
    <strong>Hang Jiang</strong>, Jussi Keppo 
    <a 
      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7362120" 
      className={styles.paperLink} 
      target="_blank" 
      rel="noopener noreferrer" 
    > 
      The Limits of AI-Mediated Decision Systems: Strategic Manipulation and Endogenous Reliance. 
    </a> 
    <span className={styles.underReview} style={{ marginLeft: '6px' }}> 
      Under review 
    </span> 
  </li> 

  <li> 
    <strong>Hang Jiang</strong> 
    <a 
      href="https://arxiv.org/abs/2509.14766" 
      className={styles.paperLink} 
      target="_blank" 
      rel="noopener noreferrer" 
    > 
      An Implementation Relaxation Approach to Principal-Agent Problems. 
    </a> 
    <span className={styles.underReview}> In preparation for submission </span> 
  </li> 

  <li> 
    <strong>Hang Jiang</strong>, Luyi Yang, Chen Jin 
    <a 
      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5923462" 
      className={styles.paperLink} 
      target="_blank" 
      rel="noopener noreferrer" 
    > 
      Digital Sales Metrics, Online Product Returns, and Guarding Against Fake Orders. 
    </a> 
    <span className={styles.underReview} style={{ marginLeft: '6px' }}> 
      Under review 
    </span> 
  </li> 
</ul>
 
      <h3 className={styles.header}>Conference Talks</h3> 
      <ul className={styles.customList}> 
        <li>2026 POMS-HK International Conference (Jan 3, 2026, Shenzhen)</li> 
        <li>2025 INFORMS Annual Meeting, Job Market Showcase Track (Oct 26, 2025, Atlanta)</li> 
        <li>Next-Gen Scholar Symposium, Analytics for X Conference 2025 (Sep 26, 2025, NUS, Singapore)</li> 
        <li>2025 INFORMS International Conference (Jul 21, 2025, Singapore)</li> 
        <li>The 7th World Congress of the Game Theory Society (Aug 22, 2024, PKU, Beijing)</li> 
        <li> 
          The 25th ACM Conference on Economics and Computation (Jul 9, 2024, Yale, New Haven){' '} 
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
    </div> 
  ); 
}; 
 
export default ResearchPage;
