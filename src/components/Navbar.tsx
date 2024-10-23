import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/research">Research</Link>
      <Link href="/teaching">Teaching</Link>
      <Link href="/readings">Readings</Link>
    </nav>
  );
}
