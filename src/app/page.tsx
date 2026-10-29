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
        {/*<div className={styles.contactLinks}>
          <a href="mailto:jianghang@u.nus.edu">Email</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://www.linkedin.com/in/hang-jiang-24572a1a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>*/}
      </div>

      {/* Right column — bio */}
      <div className={styles.bio}>
        <h1>Hi, I&apos;m Hang Jiang!</h1>
<p className="bio">
  I am an Assistant Professor in FinTech at{" "}
  <a href="https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/JIANG-Hang/hangjiang" target="_blank" rel="noopener noreferrer">
    HKUST (GZ)
  </a>
  . I received my Ph.D. in Information Systems from{" "}
  <a href="https://www.comp.nus.edu.sg/" target="_blank" rel="noopener noreferrer">
    NUS Computing
  </a>
  , my M.S. in Probability and Mathematical Statistics from{" "}
  <a href="https://math.sustech.edu.cn/?lang=en" target="_blank" rel="noopener noreferrer">
    SUSTech Mathematics
  </a>
  , and my B.S. in Statistics from{" "}
  <a href="https://en.scgy.ustc.edu.cn/7808/list.htm" target="_blank" rel="noopener noreferrer">
    USTC (Special Class for the Gifted Young)
  </a>
  .
</p>
        <p>
            My <strong> <a href="/research">research</a> </strong> studies principal-agent problems
            with applications to AI and FinTech.
        </p>
        <p>
          <strong>Active Trajectories:</strong>{' '}
           AI Agents; Token Economics.
        </p>
        <p>
          <strong>News:</strong> I am currently looking for PhD students and full-time RAs with a strong
          interest in FinTech or AI research. Please feel free to contact me at{' '}
          <a href="mailto:jianghang@u.nus.edu">jianghang AT u.nus.edu</a> or <a href="mailto:hangjiang@hkust-gz.edu.cn">hangjiang AT hkust-gz.edu.cn</a>.
        </p>
      </div>
    </div>
  );
}
