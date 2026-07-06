import Image from 'next/image';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Left column — profile photo and contact links */}
      <div className={styles.profile}>
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={220}
          height={293}
          className={styles.photo}
          priority
        />
        <div className={styles.contactLinks}>
          <a href="mailto:jianghang@u.nus.edu">Email</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://www.linkedin.com/in/hang-jiang-24572a1a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Right column — bio */}
      <div className={styles.bio}>
        <h1>Hi, I&apos;m Hang Jiang!</h1>
        <p>
          I am an Assistant Professor in FinTech at HKUST (GZ). I received my PhD from NUS Computing. Prior to that, I received my M.S. from SUSTech Math and B.S. from USTC (Special Class for the Gifted Young).
        </p>
        <p>
          <strong>
            My <a href="/research">research</a> studies principal-agent problems
            with applications to AI and FinTech.
          </strong>
        </p>
        <p>
          <strong>Active Trajectories:</strong>{' '}
          (Statistical) Contract Theory; AI Agent Incentives; Sybil Proof Mechanisms.
        </p>
        <p>
          <strong>News:</strong> I am currently looking for PhD students and full-time RAs with a strong
          interest in FinTech or AI research. Backgrounds in EconCS, math, operations research,
          statistics, or related fields are preferred. If you are interested, please feel free to contact me at{' '}
          <a href="mailto:jianghang@u.nus.edu">jianghang AT u.nus.edu</a> or <a href="mailto:hangjiang@hkust-gz.edu.cn">hangjiang AT hkust-gz.edu.cn</a>.
        </p>
      </div>
    </div>
  );
}
