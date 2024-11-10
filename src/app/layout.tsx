import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>JIANG Hang's Personal Website</title>
      </head>
      <body>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '100px', padding: '50px', backgroundColor: '#f0f0f0' }}>
          <Link href="/" style={{ fontSize: '20px', fontWeight: 'bold' }}>Home</Link>
          <Link href="/research" style={{ fontSize: '20px', fontWeight: 'bold' }}>Research</Link>
          <Link href="/teaching" style={{ fontSize: '20px', fontWeight: 'bold' }}>Teaching</Link>
          <Link href="/web3-experience" style={{ fontSize: '20px', fontWeight: 'bold' }}>Web3 Experience</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
