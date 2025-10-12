'use client'; // 若你使用的是 Next.js 13+ App Router，确保此组件在 client side 渲染

import Image from 'next/image';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem', flexWrap: 'wrap' }}>
{/* Left Column - Profile Photo */}
<div
  style={{
    marginTop: '5rem',        // ⬅️ 新增：控制整体下移
    marginRight: '4rem',
    marginBottom: '2rem',
    textAlign: 'center',
  }}
>
  <Image
    src="/profile.jpg"
    alt="Profile Picture"
    width={250}
    height={333}
    style={{ borderRadius: '8px' }}
    priority
  />

  {/* Contact links below image */}
  <div
    style={{
      marginTop: '1rem',
      fontSize: '1rem',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '2rem', // 控制链接间距
    }}
  >
    <a
      href="mailto:jianghang@u.nus.edu"
      style={{
        textDecoration: 'underline',
        color: '#0070f3',
      }}
    >
      Email
    </a>

    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'underline',
        color: '#0070f3',
      }}
    >
      CV
    </a>

    <a
      href="https://www.linkedin.com/in/hang-jiang-24572a1a7/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'underline',
        color: '#0070f3',
      }}
    >
      LinkedIn
    </a>
  </div>
</div>


      {/* Right Column - Main Content */}
      <div style={{ maxWidth: '880px', textAlign: 'justify' }}>
        <h1>Hi, I&apos;m Hang Jiang!</h1>
        
        <p>
          I am a PhD candidate in the{' '}
          <a href="https://www.comp.nus.edu.sg/disa/" target="_blank" rel="noopener noreferrer">
            Department of Information Systems and Analytics
          </a>{' '}
          at the School of Computing, National University of Singapore (NUS).
          Prior to joining NUS, I obtained an M.S. in Probability and Mathematical Statistics
          from the{' '}
          <a href="https://science-en.sustech.edu.cn/research/depart/id/263.html" target="_blank" rel="noopener noreferrer">
            Department of Mathematics
          </a>{' '}
          at the Southern University of Science and Technology (SUSTech), and a B.S. in Statistics from the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Special_Class_for_the_Gifted_Young"
            target="_blank"
            rel="noopener noreferrer"
          >
            Special Class for the Gifted Young
          </a>{' '}
          at the University of Science and Technology of China (USTC).
        </p>
        <p>
          <strong>
            My <a href="/research">research</a> investigates how misaligned incentives distort markets, digital platforms, and sociotechnical systems, and how contracts, mechanisms, and policies can be designed to address such limits.
          </strong>{' '}
          I pursue this agenda through two complementary research strands. The first develops new theoretical tools for classic principal-agent problems. The second investigates modern challenges in AI, blockchain, livestream commerce, and data markets, where issues such as strategic fakery and data manipulation frequently emerge.
        </p>

      </div>
    </div>
  );
}
