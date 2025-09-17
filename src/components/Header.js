'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isBlogActive = () => {
    if (pathname === '/') return true;

    const knownTopRoutes = ['/compendium', '/about'];
    return !knownTopRoutes.some((route) => pathname.startsWith(route));
  };

  const menuItems = [
    { name: 'Blog', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="header">
      <div className="header-text">
        <Link href="/" className="header-text-link">
          <Image
            src="/images/logo.svg"
            alt="The Special Blog Logo"
            width={42.4}
            height={43.03}
          />
          <h1 className="header-title">The Special Blog.</h1>
        </Link>

        <span className="header-subtitle">
          A footy manager blog
        </span>
      </div>
    </header>
  );
}
