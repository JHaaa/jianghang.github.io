import React from 'react';
import styles from './TeachingPage.module.css';

const TeachingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Teaching</h1>
      <div className={styles.teachingContent}>
        <h3>Teaching Assistant, School of Computing, NUS</h3>
        <ul>
          <li>BT4013 Analytics for Capital Market Trading and Investment (2023)</li>
          <li>CS4246/CS5446 AI Planning and Decision Making (2023)</li>
          <li>IS4234 Governance, Regulation, and Compliance Technology (2022)</li>
          <li>FT5003 Blockchain Innovations (2022)</li>
          <li>IS4302 Blockchain and Distributed Ledger Technologies (2022)</li>
        </ul>
        <h3>Teaching Assistant, Department of Mathematics, SUSTech</h3>
        <ul>
          <li>MA117 Calculus I (2018)</li>
          <li>MA212 Probability and Statistics (2017)</li>
        </ul>
        <h3>Teaching Assistant, USTC</h3>
        <ul>
          <li>Calculus I (2015)</li>
        </ul>
      </div>
    </div>
  );
};

export default TeachingPage;
