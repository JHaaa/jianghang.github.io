import Image from 'next/image';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      {/* Left Column - Profile Photo */}
      <div style={{ marginRight: '4rem', textAlign: 'center' }}>
        <Image
          src="/profile.jpg" // Make sure to place a photo named 'profile.jpg' in your 'public' folder
          alt="Profile Picture"
          width={250}
          height={333}
          style={{ borderRadius: '0%' }}
        />
      </div>

      {/* Right Column - Main Content */}
      <div style={{ maxWidth: '800px', textAlign: 'justify' }}>
        <h1>Hi, I&apos;m Hang Jiang!</h1>
        <p>
          I am a PhD candidate in the <a href="https://www.comp.nus.edu.sg/disa/" target="_blank" rel="noopener noreferrer">
          Department of Information Systems</a> at the School of Computing, National University of Singapore (NUS).    
          Prior to joining NUS, I obtained a M.S. in Probability and Mathematical Statistics
          from the <a href="https://science-en.sustech.edu.cn/research/depart/id/263.html" target="_blank" rel="noopener noreferrer">
          Department of Mathematics</a> at the Southern University of Science and Technology (SUSTech)
          and a B.S. in Statistics from the <a href="https://en.wikipedia.org/wiki/Special_Class_for_the_Gifted_Young#University_of_Science_and_Technology_of_China" target="_blank" rel="noopener noreferrer">
          Special Class for the Gifted Young</a> at the University of Science and Technology of China (USTC).
        </p>
        <p>My <a href="/research">Research</a> encompasses contract theory, <a href="/web3-experience">Web3</a>, and their convergence.</p>
        <p>Find me on <a href="https://twitter.com/CyberHang" target="_blank" rel="noopener noreferrer">X</a>.</p>
      </div>
    </div>
  );
}
