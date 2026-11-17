'use client';

import { useState } from 'react';
import Loader from './Loader';
import Navbar from './Navbar';
import Footer from './Footer';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <Loader onFinish={() => setLoadingComplete(true)} />}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
