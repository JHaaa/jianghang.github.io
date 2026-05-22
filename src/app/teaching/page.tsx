import React from 'react';
import styles from './TeachingPage.module.css';

const TeachingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Teaching</h1>
      <div className={styles.teachingContent}>
        <h3>Teaching Assistant, School of Computing, NUS</h3>
        <ul>
          <li><strong>BT4013</strong> Analytics for Capital Market Trading and Investment (2023)</li>
          <li><strong>CS4246/CS5446</strong> AI Planning and Decision Making (2023)</li>
          <li><strong>IS4234</strong> Governance, Regulation, and Compliance Technology (2022)</li>
          <li><strong>FT5003</strong> Blockchain Innovations (2022)</li>
          <li><strong>IS4302</strong> Blockchain and Distributed Ledger Technologies (2022)</li>
        </ul>
        <h3>Teaching Assistant, Department of Mathematics, SUSTech</h3>
        <ul>
          <li><strong>MA117</strong> Calculus I (2018)</li>
          <li><strong>MA212</strong> Probability and Statistics (2017)</li>
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